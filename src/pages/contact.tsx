import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Contact = () => {
  return (
    <Main meta={<Meta title="Contact us" description="Contact us via email" />}>
      <section
        id="contact-section"
        className="mb-96 flex flex-col justify-center pb-96 text-center"
      >
        <h1 className="text-white">coming soon...</h1>
      </section>
    </Main>
  );
};

export default Contact;
