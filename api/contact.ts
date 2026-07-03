import nodemailer from 'nodemailer';

// Custom types for Vercel Serverless Function request/response
interface ApiRequest {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body: any;
}

interface ApiResponse {
  status(code: number): ApiResponse;
  json(data: any): void;
  send(data: any): void;
}

// Simple in-memory rate limiting map (IP -> list of timestamps)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Blocked email domains for spam protection
const BLOCKED_DOMAINS = [
  'mailinator.com',
  'tempmail.com',
  'guerrillamail.com',
  '10minutemail.com'
];

// Helper to delay execution (used for deterministic retry delay)
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default async function handler(req: ApiRequest, res: ApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed. Use POST.'
    });
  }

  // 1. IP Rate Limiting (Soft check, resets on serverless cold starts)
  const forwarded = req.headers['x-forwarded-for'];
  const ip = typeof forwarded === 'string'
    ? forwarded.split(',')[0].trim()
    : (req.headers['x-real-ip'] as string) || '127.0.0.1';

  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  
  // Filter out timestamps outside the current window
  const activeTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  
  if (activeTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    console.error(`Rate limit exceeded for IP: ${ip}`);
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again in 10 minutes.'
    });
  }
  
  // Record the current request timestamp
  activeTimestamps.push(now);
  rateLimitMap.set(ip, activeTimestamps);

  try {
    const { name, email, phone, course, experience, message, x7f_93a, renderTime } = req.body || {};

    // 2. Honeypot check (x7f_93a must be completely empty)
    if (x7f_93a) {
      console.warn(`Honeypot triggered by request from IP ${ip}. Field contents:`, x7f_93a);
      return res.status(400).json({
        success: false,
        message: 'Spam detected. Submission rejected.'
      });
    }

    // 3. Timing / Speed check (Must take at least 1.2s to render & submit)
    if (!renderTime || isNaN(Number(renderTime))) {
      console.warn(`Speed check failed: renderTime missing or invalid from IP ${ip}`);
      return res.status(400).json({
        success: false,
        message: 'Invalid submission parameters.'
      });
    }

    const timeDiff = now - Number(renderTime);
    if (timeDiff < 1200) {
      console.warn(`Speed check failed: submitted in ${timeDiff}ms from IP ${ip}`);
      return res.status(400).json({
        success: false,
        message: 'Submission was too fast. Please try again.'
      });
    }

    // 4. Input Sanitization & Validation
    const safeName = typeof name === 'string' ? name.trim() : '';
    const safeEmail = typeof email === 'string' ? email.trim() : '';
    const safePhone = typeof phone === 'string' ? phone.trim() : '';
    const safeCourse = typeof course === 'string' ? course.trim() : '';
    const safeExperience = typeof experience === 'string' ? experience.trim() : '';
    const safeMessage = typeof message === 'string' ? message.trim() : '';

    // Enforce maximum lengths
    if (safeName.length > 100 || safeEmail.length > 254 || safeMessage.length > 5000 || safePhone.length > 30) {
      return res.status(400).json({
        success: false,
        message: 'Input length constraints violated.'
      });
    }

    if (!safeName || !safeEmail || !safePhone) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and phone number are required.'
      });
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(safeEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    // Burner email domain check
    const emailDomain = safeEmail.split('@')[1]?.toLowerCase();
    if (BLOCKED_DOMAINS.includes(emailDomain)) {
      console.warn(`Blocked burner email domain: ${emailDomain} from IP ${ip}`);
      return res.status(400).json({
        success: false,
        message: 'Temporary or burner email addresses are not accepted.'
      });
    }

    // 5. Nodemailer SMTP Mail Dispatch Configuration
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactReceiver = process.env.CONTACT_RECEIVER;

    if (!smtpUser || !smtpPass || !contactReceiver) {
      console.error('SMTP configuration missing in environment variables.');
      return res.status(500).json({
        success: false,
        message: 'Internal server error: Mail configuration missing.'
      });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    const mailOptions = {
      from: `"${safeName}" <${smtpUser}>`, // Must send from auth user on Gmail SMTP
      to: contactReceiver,
      replyTo: safeEmail,
      subject: `New Lead: ${safeName} - ${safeCourse}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px; background-color: #fafafa;">
          <h2 style="color: #E31E24; border-bottom: 2px solid #E31E24; padding-bottom: 10px; margin-top: 0;">Metro Academy Lead Portal</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #555;">Name:</td>
              <td style="padding: 8px 0; color: #222;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0; color: #222;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0; color: #222; font-family: monospace;">${safePhone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Course Path:</td>
              <td style="padding: 8px 0; color: #222; text-transform: capitalize;">${safeCourse}</td>
            </tr>
            ${safeExperience ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Experience:</td>
              <td style="padding: 8px 0; color: #222; text-transform: capitalize;">${safeExperience}</td>
            </tr>
            ` : ''}
          </table>
          ${safeMessage ? `
          <div style="margin-top: 20px; padding: 15px; border-left: 4px solid #E31E24; background-color: #ffffff; border-radius: 4px;">
            <h4 style="margin: 0 0 10px 0; color: #333;">Message Details</h4>
            <p style="margin: 0; color: #555; white-space: pre-wrap; font-size: 14px; line-height: 1.5;">${safeMessage}</p>
          </div>
          ` : ''}
          <div style="margin-top: 25px; font-size: 11px; color: #888; text-align: center; border-top: 1px solid #eee; padding-top: 15px;">
            Submitted from IP: ${ip} | Timestamp: ${new Date(now).toISOString()}
          </div>
        </div>
      `
    };

    // Helper to send email with deterministic single-retry on failure
    const sendMailWithRetry = async (): Promise<any> => {
      try {
        return await transporter.sendMail(mailOptions);
      } catch (err) {
        console.error('SMTP sending error, initiating deterministic 700ms retry...', err);
        await delay(700);
        return await transporter.sendMail(mailOptions); // Retry attempt
      }
    };

    const info = await sendMailWithRetry();
    console.log('Email sent successfully:', info.messageId);

    return res.status(200).json({
      success: true,
      message: 'Received successfully'
    });

  } catch (error: any) {
    console.error('Error handling lead submission API:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process request. Please try again later.'
    });
  }
}
