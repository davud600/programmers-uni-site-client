import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  function handleMenuButtonClick() {
    setNavbarOpen((prev) => !prev);
    menu.current.classList.toggle('hidden');
    menu.current.classList.toggle('mt-20');
  }

  return (
    <div className="w-full text-gray-700 antialiased">
      {props.meta}

      <div className="mx-auto">
        <nav className="m-0 flex justify-between px-4 py-6 sm:p-8 md:px-20 md:py-12">
          <div className="flex">
            <Image
              className="mb-auto w-16 cursor-pointer object-contain md:w-24"
              src="/assets/images/logo.svg"
              height={1000}
              width={1000}
              alt="Not Found"
              quality={100}
            />
            {/* <div className="ml-3 flex flex-col font-bold sm:mt-1 md:mt-3">
              <h1 className="hidden sm:block sm:text-xl md:text-2xl">
                Programmer&apos;s
              </h1>
              <h1 className="hidden sm:block sm:text-xl md:text-2xl">
                University
              </h1>
            </div> */}
          </div>
          <div className="mt-4">
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
              className="hidden h-screen w-full flex-col text-end transition-all md:flex md:h-auto"
            >
              <ul className="mt-12 mr-3 flex flex-col gap-5 text-lg font-medium md:mt-0 md:flex-row md:justify-end md:gap-10 md:text-xl lg:gap-20">
                <hr className="-ml-96 border border-gray-300 md:hidden" />
                <li>
                  <Link href="/" className="border-none">
                    <span
                      className={`link-underline link-underline-black text-gray-700 hover:text-red-800 ${
                        router.pathname === '/' ? 'link-active' : ''
                      }`}
                    >
                      Home
                    </span>
                  </Link>
                </li>
                <hr className="-ml-96 border border-gray-300 md:hidden" />
                <li>
                  <Link
                    href="/about/"
                    className="border-none text-gray-700 hover:text-gray-900"
                  >
                    <span
                      className={`link-underline link-underline-black text-gray-700 hover:text-red-800 ${
                        router.pathname === '/about' ? 'link-active' : ''
                      }`}
                    >
                      About
                    </span>
                  </Link>
                </li>
                <hr className="-ml-96 border border-gray-300 md:hidden" />
                <li>
                  <Link
                    href="/contact/"
                    className="border-none text-gray-700 hover:text-gray-900"
                  >
                    <span
                      className={`link-underline link-underline-black text-gray-700 hover:text-red-800 ${
                        router.pathname === '/contact' ? 'link-active' : ''
                      }`}
                    >
                      Contact
                    </span>
                  </Link>
                </li>
                <hr className="-ml-96 border border-gray-300 md:hidden" />
              </ul>
            </div>
          </div>
        </nav>

        {!navbarOpen && (
          <div className="content py-5 text-xl">{props.children}</div>
        )}

        <footer className="mt-48 bg-red-900 py-6 px-8 sm:px-20 md:px-24">
          <div className="md:flex md:justify-between">
            <div className="mb-6 flex items-center md:mb-0">
              <Image
                src="/assets/images/logo.svg"
                className="logo-footer mr-3 w-14 md:w-16"
                alt="Programmer's University Logo"
                width={1000}
                height={1000}
                quality={100}
              />
              <div className="ml-1 mt-1 flex flex-col font-bold text-gray-300">
                <h1 className="text-lg">Programmer&apos;s</h1>
                <h1 className="text-lg">University</h1>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-200">
                  Follow us
                </h2>
                <ul>
                  <li className="mb-4">
                    <a className="font-thin text-gray-200" href="#">
                      Tiktok
                    </a>
                  </li>
                  <li>
                    <a className="font-thin text-gray-200" href="#">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-200">
                  Legal
                </h2>
                <ul>
                  <li className="mb-4">
                    <a className="font-thin text-gray-200" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="font-thin text-gray-200" href="#">
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="mt-6 border-gray-200 opacity-20 sm:mx-auto" />
          <div className="mt-8 pb-5 sm:flex sm:items-center sm:justify-between">
            <div className="px-24"></div>
            <span className="mx-8 text-sm text-gray-200 opacity-60 sm:text-center md:mx-0">
              © Copyright {new Date().getFullYear()} {AppConfig.title}.{' '}
            </span>
            <div className="mt-4 flex md:m-0">
              <a href="#" className="footer-sm-link">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="mx-5 w-5 cursor-pointer text-gray-500 hover:text-gray-200"
                />
              </a>
              <a href="#" className="footer-sm-link">
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="mx-5 w-5 cursor-pointer text-gray-500 hover:text-gray-200"
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
