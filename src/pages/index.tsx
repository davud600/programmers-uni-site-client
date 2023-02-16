/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React from 'react';

import AnimateIn from '@/components/animations/AnimateIn';
import CourseCardsContainer from '@/components/courses/CourseCardsContainer';
import PracticeQuestion from '@/components/home/PracticeQuestion';
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

      <section id="practice-section">
        <AnimateIn>
          <SectionTitle title="Practice." />
        </AnimateIn>
        <PracticeQuestion />
      </section>
    </Main>
  );
};

export default Index;
