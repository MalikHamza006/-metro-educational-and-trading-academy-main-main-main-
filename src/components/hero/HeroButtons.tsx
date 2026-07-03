import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../shared/Button';

interface HeroButtonsProps {
  onStartJourney: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onExploreCourses: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function HeroButtons({ onStartJourney, onExploreCourses }: HeroButtonsProps) {
  return (
    <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3.5 pt-2">
      {/* Start Journey button - now with empty function or you can remove onClick */}
      <Button onClick={onStartJourney || (() => {})} icon={<ArrowRight className="w-4 h-4" />}>
        Start Trading Journey
      </Button>
      <Button variant="secondary" onClick={onExploreCourses}>
        Explore Courses
      </Button>
    </div>
  );
}