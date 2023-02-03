import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Contact = () => {
  return (
    <Main meta={<Meta title="Contact us" description="Contact us via email" />}>
      <section id="contact-section">
        <div className="contact-container center absolute z-10 flex flex-col justify-center py-8 px-20 drop-shadow-2xl">
          <article className="px-4 pt-80 text-center sm:pt-24 md:p-4">
            <h1 className="text-lg text-black md:text-3xl">Contact us</h1>
            <p className="text-base text-black opacity-75 md:text-xl">
              You can contact us via email and we will respond fast as we can.
              :)
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
            <div className="flex flex-col gap-1">
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
              <div>
                <input
                  type="submit"
                  className="rounded-3xl border-2 border-red-800 px-8 py-3 transition-all hover:cursor-pointer hover:bg-red-800 hover:text-white"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </Main>
  );
};

export default Contact;
