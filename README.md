# Metro Educational & Trading Academy

A premium, high-fidelity responsive Single-Page Application (SPA) built for **Metro Educational & Trading Academy** in Islamabad, Pakistan. 

This platform features a custom HTML5 router supporting path refreshes on Vercel, advanced Search Engine Optimization (SEO/AEO/GEO) structures, and a secure serverless mail contact directory using Nodemailer.

---

## 🚀 Key Features

### 1. Custom SPA Client-Side Routing
- Pure React state-driven routing synchronized with the browser address bar using HTML5 `pushState` and `popstate` events.
- **Refresh Protection**: Integrated Vercel rewrites fallback mapping so direct URL navigations (e.g. `/contact`, `/trading`, `/courses/forex-trading`) reload cleanly.
- **Custom 404 Page**: Built-in premium `<NotFound />` component that automatically redirects to the Home page after 5 seconds of inactivity.

### 2. Secure Serverless Admissions Form (`/api/contact`)
- **Gmail SMTP (Nodemailer)**: Directly parses lead profiles and dispatches styled HTML emails to the designated receiver.
- **IP Rate Limiting**: Limit-controlled to 5 requests per 10 minutes per IP (soft check based on `x-forwarded-for` header).
- **Honeypot Protection**: Hidden input field (`x7f_93a`) designed to decoy and immediately reject automated bot crawlers.
- **Tempo Speed Check**: Verifies that human rendering took at least **1.2 seconds** before allowing submissions.
- **Burner email block**: Disallows submissions from temporary addresses (`@mailinator.com`, `@tempmail.com`, etc.).
- **Sanitization**: Restricts maximum payload sizes and verifies format integrity.

### 3. SEO, AEO, and GEO Optimizations
- **Rich Snippets (JSON-LD)**: Injected `EducationalOrganization`, `FAQPage`, and `ItemList` metadata schemas directly inside the entry page to match Google Rich Results and Generative Search models (Perplexity, ChatGPT Search, Gemini).
- **Crawlers Configuration**: Standard compliant `robots.txt` and `sitemap.xml` referencing index targets.

---

## 🛠️ Local Development & Setup

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
1. Clone the project repository.
2. Install npm packages:
   ```bash
   npm install
   ```

### Local Environment Configuration
Create a `.env` file in the root of the project:
```env
# SMTP Mail Credentials
SMTP_USER="your_email@gmail.com"
SMTP_PASS="your_16_character_gmail_app_password"
CONTACT_RECEIVER="recipient_email@gmail.com"
```
> ⚠️ **IMPORTANT**: Do not use your primary Gmail password for `SMTP_PASS`. Follow Google Account settings to generate a secure **16-character App Password**.

### Scripts
- Run local development server:
  ```bash
  npm run dev
  ```
- Verify TypeScript types & lint check:
  ```bash
  npm run lint
  ```
- Build production bundle:
  ```bash
  npm run build
  ```

---

## ☁️ Vercel Deployment

This project is pre-configured and optimized to run out-of-the-box on the **Vercel Free tier**:

1. Link your project repository inside the Vercel Dashboard.
2. In the **Environment Variables** panel, add the following parameters:
   - `SMTP_USER`: The sender Gmail address (e.g. `metaeducation6@gmail.com`).
   - `SMTP_PASS`: The 16-character Gmail App Password.
   - `CONTACT_RECEIVER`: The recipient email address.
3. Click **Deploy**. Vercel will bundle the Vite React app, launch the serverless function `/api/contact.ts`, and apply the `vercel.json` rewrite rules.
