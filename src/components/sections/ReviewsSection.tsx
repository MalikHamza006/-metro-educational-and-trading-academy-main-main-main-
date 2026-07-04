import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { REVIEWS } from '../../constants/reviews';

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % (REVIEWS.length - reviewsPerPage + 1));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + (REVIEWS.length - reviewsPerPage + 1)) % (REVIEWS.length - reviewsPerPage + 1));
  };

  const visibleReviews = REVIEWS.slice(currentIndex, currentIndex + reviewsPerPage);

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge="Classroom Feedback"
          title="Verified Student Reviews"
          description="Read authentic feedback logged by our student community in Islamabad."
        />

        {/* Rating Summary */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="text-3xl font-bold text-gray-900">4.9</div>
          <div className="text-sm text-gray-600">Based on 500+ reviews</div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <Quote className="w-8 h-8 text-red-200 mb-4" />
              <p className="text-gray-700 text-sm leading-relaxed mb-4">"{review.comment}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img 
                  src={review.avatar || `https://ui-avatars.com/api/?name=${review.name}&background=dc2626&color=fff`} 
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{review.name}</h4>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {REVIEWS.length > reviewsPerPage && (
          <div className="flex justify-center gap-4 mt-10">
            <button 
              onClick={prevReview}
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-red-50 hover:border-red-200 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={nextReview}
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-red-50 hover:border-red-200 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}