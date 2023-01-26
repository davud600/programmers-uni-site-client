import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Programmer's University"
          description="Community for students, made by students."
        />
      }
    >
      <section
        id="home-section"
        className="mb-96 flex flex-col justify-center pb-96 text-center"
      >
        <h1 className="text-white">coming soon...</h1>
      </section>
    </Main>
  );
};

export default Index;
