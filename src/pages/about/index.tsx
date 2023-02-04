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
              Hello this is a long text which is about the Programmers
              University course, Hello this is a long text which is about the
              Programmers University course, Hello this is a long text which is
              about the Programmers University course, Hello this is a long text
              which is about the Programmers University course, Hello this is a
              long text which is about the Programmers University course
            </p>
          </article>
        </div>
      </div>
    </section>
  </Main>
);

export default About;
