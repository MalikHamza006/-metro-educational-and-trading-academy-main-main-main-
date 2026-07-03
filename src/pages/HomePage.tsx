import React from 'react';
import Hero from '../components/hero/Hero';
import TradingFeatures from '../components/sections/TradingFeatures';
import FeaturedCourses from '../components/sections/FeaturedCourses';
import ReviewsSection from '../components/sections/ReviewsSection';
import CampusSection from '../components/sections/CampusSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import RoadmapSection from '../components/sections/RoadmapSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from "../components/sections/ContactSection";


interface HomePageProps {
  onStartJourney: () => void;
  onExploreCourses: () => void;
  onViewCourse: (slug: string) => void;
}

export default function HomePage({ onStartJourney, onExploreCourses, onViewCourse }: HomePageProps) {
  return (
    <div className="space-y-16 sm:space-y-24 md:space-y-28">
      <Hero onStartJourney={onStartJourney} onExploreCourses={onExploreCourses} />
      <FeaturedCourses  onViewCourse={onViewCourse} 
        onViewAllCourses={onExploreCourses}  />
      <TradingFeatures />
      <ReviewsSection />
      <CampusSection />
      <WhyChooseUs />
      <RoadmapSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}