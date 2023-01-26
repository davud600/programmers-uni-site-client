import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    meta={<Meta title="About us" description="About Programmer's University" />}
  >
    <section
      id="about-section"
      className="mb-96 flex flex-col justify-center pb-96 text-center"
    >
      <h1 className="text-white">coming soon...</h1>
    </section>
  </Main>
);

export default About;
