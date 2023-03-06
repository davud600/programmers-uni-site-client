/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React from 'react';

import AnimateIn from '@/components/animations/AnimateIn';
import CourseCardsContainer from '@/components/home/courses/CourseCardsContainer';
import PracticeQuestion from '@/components/home/PracticeQuestion';
import TechnologyLogos from '@/components/home/TechnologyLogos';
import SectionTitle from '@/components/SectionTitle';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Programmer's University"
          description="Community for students, made by students."
        />
      }
    >
      <section id="home-section">
        <AnimateIn>
          <SectionTitle title="Coming soon..." />
        </AnimateIn>
      </section>

      <section id="courses-section" className="bg-black bg-opacity-20">
        <AnimateIn>
          <SectionTitle title="Our course programs." style="text-white" />
        </AnimateIn>
        <CourseCardsContainer />
      </section>

      {/* Mid Section */}
      <div className="h-48 w-full bg-red-800">
        <TechnologyLogos />
      </div>

      <section id="practice-section">
        <AnimateIn>
          <SectionTitle title="Practice." />
        </AnimateIn>
        <AnimateIn>
          <PracticeQuestion />
        </AnimateIn>
      </section>
    </Main>
  );
};

export default Index;
