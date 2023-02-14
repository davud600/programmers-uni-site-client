import React from 'react';

import CourseCardsContainer from '@/components/courses/CourseCardsContainer';
import PracticeQuestion from '@/components/PracticeQuestion';
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
        <h1 className="pt-24 pb-16 text-2xl text-black md:text-4xl">
          Coming soon...
        </h1>
      </section>

      <section id="courses-section">
        <h1 className="pt-24 pb-16 text-2xl text-black md:text-4xl">
          Our Course Programs.
        </h1>
        <CourseCardsContainer />
      </section>

      <section id="practice-section">
        <h1 className="pt-24 pb-16 text-2xl text-black md:text-4xl">
          Practice.
        </h1>
        <PracticeQuestion />
      </section>
    </Main>
  );
};

export default Index;
