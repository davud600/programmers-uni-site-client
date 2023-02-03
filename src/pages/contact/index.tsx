import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Contact = () => {
  return (
    <Main meta={<Meta title="Contact us" description="Contact us via email" />}>
      <section id="contact-section">
        <div className="contact-container-container">
          <div className="contact-container z-10 flex flex-col justify-center py-8 px-20 drop-shadow-2xl">
            <article className="px-6 pt-24 text-center sm:pt-24 md:p-4">
              <h1 className="text-lg text-black md:text-3xl">Contact us</h1>
              <p className="text-base text-black opacity-75 md:text-xl">
                You can contact us via email and we will respond fast as we can.
                :)
              </p>
            </article>
            <form className="flex w-full justify-center gap-14 py-4 text-black">
              <div className="mt-0 hidden flex-col gap-3 text-base md:mt-5 md:flex md:gap-6 md:text-lg">
                <span className="opacity-60">Keep in touch</span>
                <div className="flex flex-col gap-1">
                  <span className="opacity-60">Pristina</span>
                  <span className="opacity-60">Kosovo</span>
                </div>
                <span className="opacity-60">prouniks@gmail.com</span>
              </div>
              <div className="-mt-4 flex flex-col gap-0 md:mt-0 md:gap-1">
                <div className="flex w-full flex-col justify-between lg:flex-row">
                  <input
                    type="text"
                    id="fullName"
                    className="my-1 mr-4 block w-full rounded-lg border border-gray-300 bg-gray-50 py-2 px-3 text-sm text-gray-900 md:my-3 md:py-4 md:px-5 md:text-base"
                    placeholder="Filon Fisteku"
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    className="my-1 block w-full rounded-lg border border-gray-300 bg-gray-50 py-2 px-3 text-sm text-gray-900 md:my-3 md:py-4 md:px-5 md:text-base"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
                <textarea
                  className="my-1 block w-full rounded-lg border border-gray-300 bg-gray-50 py-2 px-3 text-sm text-gray-900 md:my-3 md:py-4 md:px-5 md:text-base"
                  id="textContent"
                  cols={30}
                  rows={10}
                ></textarea>
                <div className="flex justify-center md:justify-end">
                  <input
                    type="submit"
                    className="rounded-3xl border-2 border-red-800 px-8 py-3 transition-all hover:cursor-pointer hover:bg-red-800 hover:text-white"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-24 flex flex-col gap-5 md:hidden">
          <span className="opacity-60">Keep in touch</span>
          <div className="flex flex-col gap-1">
            <span className="opacity-60">Pristina</span>
            <span className="opacity-60">Kosovo</span>
          </div>
          <span className="opacity-60">prouniks@gmail.com</span>
        </div>
      </section>
    </Main>
  );
};

export default Contact;
