import CourseCard from '@/components/courses/CourseCard';
import type { Course } from '@/components/courses/CourseIterface';

const courseFirst: Course = {
  title: 'Java',
  details: 'Learn Object Oriented Programming in Java',
  type: 'first',
};
const courseSecond: Course = {
  title: 'Web Development',
  details:
    'Essential Web Developer skills: git, HTML, CSS, javascript, PHP, Node.js, Ract.js, tailwind',
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
      <div className="top-courses-container flex flex-col md:flex-row">
        <CourseCard course={courseFirst} />
        <CourseCard course={courseSecond} />
      </div>
      <div className="z-10">
        <CourseCard course={courseThird} />
      </div>
    </>
  );
};

export default CourseCardsContainer;
