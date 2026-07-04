interface SuccessStoriesPageProps {
  setPath?: (path: string) => void;
}

export default function SuccessStoriesPage({ setPath }: SuccessStoriesPageProps) {
  const stories = [
    {
      name: "Ali Khan",
      course: "Forex Trading Mastery",
      result: "Consistently profitable after 6 months",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      location: "Karachi, Pakistan",
      earnings: "+245% ROI",
      testimonial: "The mentorship at METRO transformed my trading approach. Their risk management strategies helped me achieve consistent profits I never thought possible.",
      joinedDate: "January 2024",
      achievement: "Funded Account: $50,000"
    },
    {
      name: "Ahmed Raza",
      course: "Crypto Trading",
      result: "Built a full-time trading career",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      location: "Lahore, Pakistan",
      earnings: "+189% ROI",
      testimonial: "Went from complete beginner to full-time crypto trader. The live sessions and community support made all the difference.",
      joinedDate: "March 2023",
      achievement: "Portfolio Growth: 3x"
    },
    {
      name: "Usman Ali",
      course: "Stock Market",
      result: "Passed funded account challenge",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      location: "Islamabad, Pakistan",
      earnings: "+312% ROI",
      testimonial: "Cleared FTMO challenge on first attempt. The prop trading module is exceptional and very practical.",
      joinedDate: "October 2023",
      achievement: "FTMO Certified Trader"
    },
    {
      name: "Sara Ahmed",
      course: "Web Development",
      result: "Landing dream job in tech",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      location: "Rawalpindi, Pakistan",
      earnings: "Salary: 250k PKR",
      testimonial: "The full-stack bootcamp prepared me for real-world challenges. Got hired within 2 months of completion.",
      joinedDate: "June 2023",
      achievement: "Senior Developer at TechStart"
    },
    {
      name: "Bilal Hassan",
      course: "UI/UX Design",
      result: "Top-rated freelancer on Upwork",
      image: "https://randomuser.me/api/portraits/men/89.jpg",
      location: "Multan, Pakistan",
      earnings: "$8,500+ earned",
      testimonial: "The freelancing program taught me how to win clients. Now I earn more than many full-time jobs.",
      joinedDate: "February 2024",
      achievement: "100+ Projects Completed"
    },
    {
      name: "Zara Malik",
      course: "Freelancing Program",
      result: "Built 6-figure agency",
      image: "https://randomuser.me/api/portraits/women/54.jpg",
      location: "Peshawar, Pakistan",
      earnings: "$15,000/month",
      testimonial: "From zero to leading a team of 5 freelancers. The business scaling module is worth every penny.",
      joinedDate: "September 2023",
      achievement: "Agency Owner"
    },
    {
      name: "Hamza Ali",
      course: "Forex Trading",
      result: "Managing family trading portfolio",
      image: "https://randomuser.me/api/portraits/men/23.jpg",
      location: "Faisalabad, Pakistan",
      earnings: "+178% YTD",
      testimonial: "The risk management techniques saved my capital multiple times. Now managing funds for family members too.",
      joinedDate: "August 2023",
      achievement: "Verified MQL5 Signals"
    },
    {
      name: "Fatima Noor",
      course: "Digital Marketing",
      result: "Top 1% Google Certified",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      location: "Quetta, Pakistan",
      earnings: "Brand Deals: 500k+",
      testimonial: "The practical SEO and ads training got me certified and clients immediately after course completion.",
      joinedDate: "December 2023",
      achievement: "Agency Partner"
    },
    {
      name: "Omar Farooq",
      course: "Crypto Trading",
      result: "Built automated trading bot",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
      location: "Sialkot, Pakistan",
      earnings: "+423% ROI",
      testimonial: "The algorithmic trading module helped me create profitable bots. Trading while sleeping is real!",
      joinedDate: "November 2023",
      achievement: "3commas Verified"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
          Real Results, Real People
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Success Stories
        </h1>
        <p className="text-xl text-gray-600">
          Join thousands of students who transformed their careers with METRO Academy
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto mb-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
          <div className="text-3xl font-bold text-red-600 mb-1">2,000+</div>
          <div className="text-sm text-gray-600">Successful Graduates</div>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
          <div className="text-3xl font-bold text-red-600 mb-1">₨500M+</div>
          <div className="text-sm text-gray-600">Combined Earnings</div>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
          <div className="text-3xl font-bold text-red-600 mb-1">97%</div>
          <div className="text-sm text-gray-600">Job Placement Rate</div>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
          <div className="text-3xl font-bold text-red-600 mb-1">15+</div>
          <div className="text-sm text-gray-600">Industry Partners</div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200"
          >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between text-white">
                  <span className="text-sm font-medium bg-red-600 px-3 py-1 rounded-full">
                    {item.course}
                  </span>
                  <span className="text-xs bg-black/50 px-2 py-1 rounded">
                    {item.joinedDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              {/* Name and Location */}
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500">
                  📍 {item.location}
                </p>
              </div>

              {/* Achievement Badge */}
              <div className="mb-4 inline-block bg-green-50 text-green-700 px-3 py-1 rounded-lg text-sm font-medium">
                🏆 {item.achievement}
              </div>

              {/* Testimonial */}
              <p className="text-gray-600 italic text-sm leading-relaxed mb-4">
                "{item.testimonial}"
              </p>

              {/* Results Section */}
              <div className="border-t border-gray-100 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Trading Result</p>
                    <p className="text-lg font-bold text-red-600">
                      {item.earnings}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-1">Status</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {item.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="mt-4 text-right">
                <svg className="w-8 h-8 text-red-200 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-10 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg mb-6 text-red-100">
            Join METRO Academy today and start your journey towards financial freedom
          </p>
          <button 
            onClick={() => setPath ? setPath('contact') : window.location.href = '/contact'}
            className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Your Journey →
          </button>
        </div>
      </div>
    </div>
  );
}