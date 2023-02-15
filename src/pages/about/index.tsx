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

    <section id="faq-section">
      <h1 className="pt-24 pb-16 text-2xl text-black md:text-4xl">
        Frequently asked questions.
      </h1>
      <div className="flex w-5/6 flex-col justify-start px-2 md:w-4/6 md:px-8">
        <article className="py-1">
          <h1 className="text-lg text-black md:text-xl">
            • What is Programmer&apos;s University?
          </h1>
          <p className="text-base md:text-lg">
            Something between a bootcamp and a private tutoring, we have
            sessions each week which are interactive and intuitive but we
            don&apos;t give any certificates in the end.
          </p>
        </article>
        <article className="py-1">
          <h1 className="text-lg text-black md:text-xl">
            • Who teaches during the learning sessions?
          </h1>
          <p className="text-base md:text-lg">
            They are students with a big passion for programming.
          </p>
        </article>
        <article className="py-1">
          <h1 className="text-lg text-black md:text-xl">• Who can join?</h1>
          <p className="text-base md:text-lg">
            Anyone who wants to learn programming who is within the ages of
            15-25 but out main target is students.
          </p>
        </article>
        <article className="py-1">
          <h1 className="text-lg text-black md:text-xl">
            • What will we learn?
          </h1>
          <p className="text-base md:text-lg">
            There&apos;s a few options you could go with:
          </p>
          <p className="text-base md:text-lg">
            1. Object Oriented in Java - You will learn the core concepts of OOP
            and learn Java.
          </p>
          <p className="text-base md:text-lg">
            2. Full-Stack Web Development - You will learn to use tools like
            git, github, visual studio coode, HTML, CSS, Javascript and also
            modern technologies like React / Next js, tailwind and also backend
            development with Node js and PHP.
          </p>
          <p className="text-base md:text-lg">3. Basics of C++.</p>
        </article>
        <article className="py-1">
          <h1 className="text-lg text-black md:text-xl">
            • What if I want private tutoring?
          </h1>
          <p className="text-base md:text-lg">
            We also offer private tutoring to students who want to be taught
            privately, if you&apos;re interested contact us via email or the
            contact form on our website.
          </p>
        </article>
        <article className="py-1">
          <h1 className="text-lg text-black md:text-xl">
            • Do we get any certifications at the end of the course?
          </h1>
          <p className="text-base md:text-lg">
            All we provide is knowledge and a community of students helping each
            other, we don&apos;t offer any certificates or job opportunities.
          </p>
        </article>
      </div>
    </section>
  </Main>
);

export default About;
