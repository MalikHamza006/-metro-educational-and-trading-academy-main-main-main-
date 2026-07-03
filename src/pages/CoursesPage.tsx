import React, { useState } from 'react';
import { Search, HelpCircle } from 'lucide-react';
import CourseCard from '../components/cards/CourseCard';
import SectionHeading from '../components/shared/SectionHeading';
import { COURSES } from '../constants/courses';

interface CoursesPageProps {
  onViewCourse: (slug: string) => void;
}

const CATEGORY_TABS = [
  { id: 'all', label: 'All programs' },
  { id: 'forex', label: 'Forex Flagship' },
  { id: 'tech', label: 'Tech Shield' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'creative', label: 'Creative Media' },
  { id: 'academic', label: 'Academics & IELTS' }
];

const getCourseImage = (slug: string): string => {
  const images: Record<string, string> = {
    // Forex Courses (3 courses)
    'forex-trading': 'https://i.postimg.cc/PqTq8YG4/trading-teaches1.jpg',
    'advanced-forex': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600',
    'crypto-trading': 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=600',
    
    // Tech Courses (5 courses)
    'cyber-security': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600',
    'web-development': 'https://i.postimg.cc/8CNCrM8m/website-coding.jpg',
    'full-stack-development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
    'mobile-app-development': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600',
    'python-programming': 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=600',
    
    // Marketing Courses (3 courses)
    'digital-marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    'meta-ads': 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600',
    'google-ads': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600',
    
    // Creative Courses (3 courses)
    'graphic-design': 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600',
    'video-editing': 'https://images.unsplash.com/photo-1536240474400-bd0a2e7b7536?auto=format&fit=crop&q=80&w=600',
    'ui-ux-design': 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=600',
    
    // Academic Courses (3 courses)
    'ielts-preparation': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600',
    'spoken-english': 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600',
    'academic-writing': 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&q=80&w=600',
  };
  
  return images[slug] || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600';
};

export default function CoursesPage({ onViewCourse }: CoursesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCourses = COURSES.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge="Academic Roadmap"
          title="Explore Professional Pathways"
          description="Whether targeting professional Forex trading mastery or future-ready technical, creative, or language bands, METRO Educational & Trading Academy supports your advancement."
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-[#FAF9F9] p-4 rounded-2xl border border-red-500/10 shadow-sm">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search for program details..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-red-500/15 rounded-xl pl-10 pr-4 py-2 text-xs focus:outline-none focus:border-red-500 text-slate-800 font-sans"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 self-start md:self-auto overflow-x-auto max-w-full">
            {CATEGORY_TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-[11px] font-mono tracking-wider uppercase shrink-0 cursor-pointer transition-colors ${
                  selectedCategory === tab.id ? 'bg-primary-red text-white' : 'bg-white text-slate-600 border border-red-500/10 hover:border-red-500/20 hover:text-primary-red'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              category={course.category}
              description={course.shortDesc}
              image={getCourseImage(course.slug)}
              duration={course.duration}
              slug={course.slug}
              isFlagship={course.isFlagship}
              onViewDetails={onViewCourse}
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16 space-y-2">
            <HelpCircle className="w-8 h-8 text-red-500/30 mx-auto" strokeWidth={1.5} />
            <h4 className="font-display font-medium text-slate-800">No Match Found</h4>
            <p className="text-xs text-slate-500 font-sans">Modify filters or search term parameters.</p>
          </div>
        )}
      </div>
    </div>
  );
}