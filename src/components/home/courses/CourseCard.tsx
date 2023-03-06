import type { Course } from '@/components/home/courses/CourseInterface';

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <article
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={`card-safari course-card ${course.type}-course-card flex flex-col justify-center overflow-hidden py-4 px-8 text-center drop-shadow-2xl md:px-20`}
    >
      <h2 className="-mb-2 text-base text-black md:text-lg">{course.title}</h2>
      <p className="text-sm opacity-75 md:text-lg">{course.details}</p>
      <button className="text-base md:text-lg">More details</button>
    </article>
  );
};

export default CourseCard;
