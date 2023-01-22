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
      <section className="flex flex-col pb-0 md:flex-row md:pb-28">
        <div className="py-8 px-4 text-center md:p-14 md:text-start">
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
            <button className="mr-2 mb-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-6 py-3 text-center text-lg font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
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
