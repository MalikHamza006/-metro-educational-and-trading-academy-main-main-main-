import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import GlowBackground from './components/shared/GlowBackground';

// Lazy load pages for performance
const HomePage = lazy(() => import('./pages/HomePage'));
const TradingPage = lazy(() => import('./pages/TradingPage'));
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const SuccessPage = lazy(() => import('./pages/SuccessStoriesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CourseDetailsPage = lazy(() => import('./pages/CourseDetailsPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Get path from URL for page refresh support
const getInitialPath = (): string => {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  if (!path) return 'home';
  if (path.startsWith('course-')) return path;
  
  const validPaths = ['home', 'trading', 'courses', 'about', 'success', 'contact'];
  if (validPaths.includes(path)) return path;
  
  // Dynamic rewrite for /courses/:slug
  const parts = path.split('/');
  if (parts[0] === 'courses' && parts[1]) {
    return `course-${parts[1]}`;
  }
  
  return '404';
};

function LoadingFallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary-red border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  const [currentPath, setPath] = useState<string>(getInitialPath);
  const [advisorModal, setAdvisorModal] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  // Support browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setPath(getInitialPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigation = (path: string) => {
    setPath(path);
    let urlPath = '/' + (path === 'home' ? '' : path);
    if (path.startsWith('course-')) {
      urlPath = `/courses/${path.substring(7)}`;
    }
    if (window.location.pathname !== urlPath) {
      window.history.pushState({ path }, '', urlPath);
    }
  };

  const handleCourseView = (slug: string) => {
    console.log('Navigating to course:', slug);
    handleNavigation(`course-${slug}`);
  };

  const handleEnrollClick = () => {
    setAdvisorModal(true);
  };

  const renderPage = () => {
    // Check if current path is a course detail page
    if (currentPath.startsWith('course-')) {
      const courseSlug = currentPath.substring(7); // Remove 'course-' prefix
      console.log('Rendering course details for:', courseSlug); // For debugging
      return (
        <CourseDetailsPage 
          courseSlug={courseSlug} 
          onEnrollSuccess={() => handleNavigation('courses')}
        />
      );
    }

    switch (currentPath) {
      case 'about':
        return <AboutPage setPath={handleNavigation} />;
      case 'contact':
        return <ContactPage />;
      case 'success':
        return <SuccessPage setPath={handleNavigation} />;
      case 'courses':
        return <CoursesPage onViewCourse={handleCourseView} />;
      case 'trading':
        return <TradingPage onEnroll={() => handleCourseView('forex-trading')} />;
      case '404':
        return <NotFound onGoHome={() => handleNavigation('home')} />;
      case 'home':
      default:
        return (
          <HomePage 
            onStartJourney={() => handleCourseView('forex-trading')}
            onExploreCourses={() => handleNavigation('courses')}
            onViewCourse={handleCourseView}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col justify-between selection:bg-red-100 selection:text-primary-red font-sans antialiased relative overflow-x-hidden">
      <GlowBackground />
      
      <Navbar 
        currentPath={currentPath} 
        setPath={handleNavigation} 
        onEnrollClick={handleEnrollClick} 
      />

      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Suspense fallback={<LoadingFallback />}>
              {renderPage()}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setPath={handleNavigation} />
    </div>
  );
}