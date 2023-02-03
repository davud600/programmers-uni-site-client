import Image from 'next/image';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Contact = () => {
  return (
    <Main meta={<Meta title="Contact us" description="Contact us via email" />}>
      <section id="contact-section">
        <Image
          className="center contact-hexagon absolute z-10 drop-shadow-2xl"
          src="/assets/images/hexagon-white.svg"
          height={2000}
          width={2000}
          alt="Not Found"
          quality={100}
        />
        <div className="center absolute z-20 ">
          <article className="px-96 py-4 text-center">
            <h1 className="text-3xl text-black">Contact us</h1>
            <p className="text-xl text-black opacity-75">
              You can contact us through our email. Also if you want to get a
              full refund (available within 7 days of your purchase) and we will
              respond fast as we can. :)
            </p>
          </article>
          <form className="flex w-full justify-center gap-14 py-4 text-black">
            <div className="mt-5 flex flex-col gap-6 text-lg">
              <span className="opacity-60">Keep in touch</span>
              <div className="flex flex-col gap-1">
                <span className="opacity-60">Pristina</span>
                <span className="opacity-60">Kosovo</span>
              </div>
              <span className="opacity-60">prouniks@gmail.com</span>
            </div>
            <div className="flex flex-col">
              <div className="flex w-full justify-between">
                <input
                  type="text"
                  id="fullName"
                  className="my-3 mr-4 block w-full rounded-lg border border-gray-300 bg-gray-50 py-4 px-5 text-base text-gray-900"
                  placeholder="Filon Fisteku"
                  required
                />
                <input
                  type="email"
                  id="email"
                  className="my-3 block w-full rounded-lg border border-gray-300 bg-gray-50 py-4 px-5 text-base text-gray-900"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <textarea
                className="my-3 block w-full rounded-lg border border-gray-300 bg-gray-50 py-4 px-5 text-base text-gray-900"
                id="textContent"
                cols={30}
                rows={10}
              ></textarea>
            </div>
          </form>
        </div>
      </section>
    </Main>
  );
};

export default Contact;
