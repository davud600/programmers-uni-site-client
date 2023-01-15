import Image from 'next/image';

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
      <section className="flex flex-col md:flex-row">
        <div className="p-5 text-center md:p-14 md:text-start">
          <div>
            <span className="text-6xl font-semibold">Hello</span>
          </div>
          <div className="w-full text-lg text-gray-600 md:w-1/2">
            <p className="">
              this is a long paragraph heheslk spoifu posidfu klsjafposdiu
              pofksjdapojsakofj spofiusod.
            </p>
          </div>
          <div className="mt-14">
            <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
        <div>
          <Image
            width={800}
            height={1000}
            src={'/assets/images/background.png'}
            alt="Not Found"
          />
        </div>
      </section>
    </Main>
  );
};

export default Index;
