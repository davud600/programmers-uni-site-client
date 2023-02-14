import CourseCard from '@/components/courses/CourseCard';
import type { Course } from '@/components/courses/CourseIterface';

const courseFirst: Course = {
  title: 'Course 1',
  details:
    'this is a long text or paragraph explaining stuff about the first course',
  type: 'first',
};
const courseSecond: Course = {
  title: 'Course 2',
  details:
    'this is a long text or paragraph explaining stuff about the second course',
  type: 'second',
};
const courseThird: Course = {
  title: 'Course 3',
  details:
    'this is a long text or paragraph explaining stuff about the third course',
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
