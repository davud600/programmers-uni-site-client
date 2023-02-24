/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import FAQItem from '@/components/about/FAQItem';
import AnimateIn from '@/components/animations/AnimateIn';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    meta={<Meta title="About us" description="About Programmer's University" />}
  >
    <section id="about-section">
      <div className="about-container-container">
        <div className="rotate about-container flex flex-col justify-center py-8 px-24 drop-shadow-2xl">
          <article className="fade-in-late -mt-24 flex flex-col justify-center text-center">
            <h1 className="text-lg text-black md:text-3xl">About us</h1>
            <p className="text-base text-black opacity-75 md:text-xl">
              Hello, Programmer&apos;s University is a training course for young
              students who are interested in learning programming with Java, C++
              or Web Development. Our team is also young students who have been
              passionate about programming for a long time and have gained some
              experience from learning and working together, so we thought it
              would be a good idea to build a community of students doing the
              same thing.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section id="faq-section">
      <AnimateIn>
        <h1 className="pt-24 pb-16 text-2xl text-black md:text-4xl">
          Frequently asked questions.
        </h1>
      </AnimateIn>
      <div className="flex w-5/6 flex-col justify-start px-2 md:w-4/6 md:px-8">
        <FAQItem
          question="What is Programmer's University?"
          answer="Something between a bootcamp and a private tutoring, we have sessions
          each week which are interactive and intuitive but we don't give
          any certificates in the end."
        />
        <FAQItem
          question="Who teaches during the learning sessions?"
          answer="They are students with a big passion for programming."
        />
        <FAQItem
          question="Who can join?"
          answer="Anyone who wants to learn programming but out main target is students."
        />
        <FAQItem
          question="What will we learn?"
          answer="There's a few options you could go with:"
          items={[
            'Object Oriented in Java - You will learn the core concepts of OOP and learn Java.',
            'Full-Stack Web Development - You will learn to use tools like git, github, visual studio coode, HTML, CSS, Javascript and also modern technologies like React / Next js, tailwind and also backend development with Node js and PHP.',
            'Basics of C++.',
          ]}
        />
        <FAQItem
          question="What if I want private tutoring?"
          answer="We also offer private tutoring to students who want to be taught privately, if you're interested contact us via email or the contact form on our website."
        />
        <FAQItem
          question="Do we get any certifications at the end of the course?"
          answer="All we provide is knowledge and a community of students helping each other, we don't offer any certificates or job opportunities."
        />
      </div>
    </section>
  </Main>
);

export default About;
