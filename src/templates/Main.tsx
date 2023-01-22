import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useRef, useState } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const menu = useRef<any>();
  const [navbarOpen, setNavbarOpen] = useState(false);

  function handleMenuButtonClick() {
    setNavbarOpen((prev) => !prev);
    menu.current.classList.toggle('hidden');
    menu.current.classList.toggle('mt-24');
  }

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      {props.meta}

      <div className="mx-auto">
        <div className="flex justify-between border-b border-gray-300 p-3">
          <Image
            className="ml-4 mb-auto w-16 cursor-pointer object-contain md:w-20"
            src="/assets/images/logo.svg"
            height={75}
            width={75}
            alt="Not Found"
            quality={100}
          />
          <div className="mt-6">
            <div className="flex w-full justify-end pr-7">
              <button
                className="block h-6 w-6 text-xl md:hidden"
                onClick={handleMenuButtonClick}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            <div
              ref={menu}
              className="hidden h-screen w-full flex-col text-end md:flex md:h-auto"
            >
              <ul className="mt-12 mr-5 flex flex-col flex-wrap gap-16 text-2xl md:mt-0 md:flex-row md:justify-end md:gap-10 md:text-xl lg:gap-20">
                <li>
                  <Link
                    href="/"
                    className="border-none text-gray-700 hover:text-gray-900"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/"
                    className="border-none text-gray-700 hover:text-gray-900"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/"
                    className="border-none text-gray-700 hover:text-gray-900"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {!navbarOpen && (
          <div className="content py-5 text-xl">{props.children}</div>
        )}

        <footer className="border-t border-gray-300 p-4 sm:p-6">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <Image
                  src="/assets/images/logo-footer.png"
                  className="mr-3 w-14 md:w-24"
                  alt="Programmer's University Logo"
                  width={50}
                  height={50}
                  quality={100}
                />
                <span className="self-center whitespace-nowrap text-2xl font-semibold">
                  Programmers&apos;s University
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                  Follow us
                </h2>
                <ul className="text-gray-600">
                  <li className="mb-4">
                    <a href="#">Tiktok</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                  Legal
                </h2>
                <ul className="text-gray-600">
                  <li className="mb-4">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Refund Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="px-24"></div>
            <span className="mx-8 text-sm text-gray-500 sm:text-center md:mx-0">
              © Copyright {new Date().getFullYear()} {AppConfig.title}.{' '}
            </span>
            <div className="m-4 flex md:m-0">
              <a href="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="mx-5 w-5 cursor-pointer text-gray-500 hover:text-gray-900"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="mx-5 w-5 cursor-pointer text-gray-500 hover:text-gray-900"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export { Main };
