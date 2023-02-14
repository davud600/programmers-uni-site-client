import { useState } from 'react';

import Alert from '@/components/Alert';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const SERVER_URL = 'http://localhost:4000/';

const Contact = () => {
  interface SentMailStatus {
    sent: boolean;
    failed: boolean;
    message: string;
  }

  interface FormDataType {
    email: string;
    fullName: string;
    messageContent: string;
  }

  const [sentMailStatus, setMailStatus] = useState<SentMailStatus>({
    sent: false,
    failed: false,
    message: '',
  });

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [messageContent, setMessageContent] = useState('');

  let mailData: FormDataType = {
    fullName: '',
    email: '',
    messageContent: '',
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    mailData = { fullName, email, messageContent };

    try {
      await fetch(`${SERVER_URL}api/contact-mail`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(mailData),
      });

      setMailStatus({
        sent: true,
        failed: false,
        message:
          "Message sent successfully, we'll reach back at you as soon as we can.",
      });
    } catch (error) {
      setMailStatus({
        sent: true,
        failed: true,
        message:
          'There was an error while trying to send your message, please try again.',
      });
    }
  };

  const inputChangeHandler = (
    setFunction: React.Dispatch<React.SetStateAction<string>>,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFunction(event.target.value);
  };

  const textAreaChangeHandler = (
    setFunction: React.Dispatch<React.SetStateAction<string>>,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFunction(event.target.value);
  };

  return (
    <Main meta={<Meta title="Contact us" description="Contact us via email" />}>
      <section id="contact-section">
        <div className="contact-container-container">
          <div className="contact-container flex flex-col justify-center py-8 px-20 drop-shadow-2xl">
            {sentMailStatus.sent && (
              <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 md:top-12">
                <Alert
                  type={sentMailStatus.failed ? 'danger' : 'success'}
                  message={sentMailStatus.message}
                />
              </div>
            )}
            <article className="px-6 pt-24 text-center sm:pt-24 md:p-4">
              <h1 className="text-lg text-black md:text-3xl">Contact us</h1>
              <p className="text-base text-black opacity-75 md:text-xl">
                You can contact us via email and we will respond fast as we can.
                :)
              </p>
            </article>
            <form
              className="flex w-full justify-center gap-14 py-4 text-black"
              onSubmit={onSubmitHandler}
            >
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
                    onChange={(e) => inputChangeHandler(setFullName, e)}
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    className="my-1 block w-full rounded-lg border border-gray-300 bg-gray-50 py-2 px-3 text-sm text-gray-900 md:my-3 md:py-4 md:px-5 md:text-base"
                    placeholder="example@gmail.com"
                    onChange={(e) => inputChangeHandler(setEmail, e)}
                    required
                  />
                </div>
                <textarea
                  className="my-1 block w-full rounded-lg border border-gray-300 bg-gray-50 py-2 px-3 text-sm text-gray-900 md:my-3 md:py-4 md:px-5 md:text-base"
                  id="textContent"
                  onChange={(e) => textAreaChangeHandler(setMessageContent, e)}
                  cols={30}
                  rows={5}
                ></textarea>
                <div className="flex justify-center md:justify-start">
                  <button
                    type="submit"
                    className="submit-btn mt-3 rounded-3xl border-2 border-red-800 py-2 px-6  text-red-800 transition-all hover:cursor-pointer hover:bg-red-800 hover:text-white md:px-8 md:py-3"
                  >
                    <span className="text-base md:text-xl">Submit</span>
                  </button>
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
