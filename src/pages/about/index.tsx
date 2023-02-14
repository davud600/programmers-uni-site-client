import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    meta={<Meta title="About us" description="About Programmer's University" />}
  >
    <section id="about-section">
      <div className="about-container-container">
        <div className="about-container flex flex-col justify-center py-8 px-24 drop-shadow-2xl">
          <article className="-mt-24 flex flex-col justify-center text-center">
            <h1 className="text-lg text-black md:text-3xl">About us</h1>
            <p className="text-base text-black opacity-75 md:text-xl">
              Hello, Programmer&apos;s University is a training course for young
              students who are interested in learning programming with Java, C++
              or Web Development. Our team is also young students who have been
              passionate about programming for a long time and have gained some
              experience from learning and working together, so we though it
              would be a good idea to build a community of students doing the
              same thing.
            </p>
          </article>
        </div>
      </div>
    </section>
  </Main>
);

export default About;
