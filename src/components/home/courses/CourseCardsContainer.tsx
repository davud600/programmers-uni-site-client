import AnimateLeft from '@/components/animations/AnimateLeft';
import AnimateRight from '@/components/animations/AnimateRight';
import AnimateUp from '@/components/animations/AnimateUp';
import CourseCard from '@/components/home/courses/CourseCard';
import type { Course } from '@/components/home/courses/CourseInterface';

const courseFirst: Course = {
  title: 'Java',
  details: 'Learn Object Oriented Programming in Java',
  type: 'first',
};
const courseSecond: Course = {
  title: 'Web Development',
  details:
    'Essential Web Developer skills: git, HTML, CSS, javascript, Next js (React), tailwind, Node.js',
  type: 'second',
};
const courseThird: Course = {
  title: 'C++',
  details: 'C++ for beginners',
  type: 'third',
};

const CourseCardsContainer = () => {
  return (
    <>
      <div className="top-courses-container mt-16 flex flex-col md:flex-row">
        <AnimateRight>
          <CourseCard course={courseFirst} />
        </AnimateRight>
        <AnimateLeft>
          <CourseCard course={courseSecond} />
        </AnimateLeft>
      </div>
      <div className="z-10">
        <AnimateUp>
          <CourseCard course={courseThird} />
        </AnimateUp>
      </div>
    </>
  );
};

export default CourseCardsContainer;
