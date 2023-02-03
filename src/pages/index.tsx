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
      <section id="home-section">
        <h1 className="text-black">coming soon...</h1>
      </section>
    </Main>
  );
};

export default Index;
