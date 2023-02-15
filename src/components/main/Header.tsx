import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';

const Header = ({ wrapper }: { wrapper: any }) => {
  const menu = useRef<any>();
  const router = useRouter();

  const handleMenuButtonClick = () => {
    wrapper.current.classList.toggle('!overflow-hidden');
  };

  return (
    <nav className="m-0 flex justify-between px-4 py-6 sm:p-8 md:px-20 md:py-12">
      <div className="flex">
        <Image
          className="mb-auto w-16 cursor-pointer object-contain md:w-28"
          src="/assets/images/logo.svg"
          height={1000}
          width={1000}
          alt="Not Found"
          quality={100}
        />
        <div className="ml-3 flex flex-col sm:mt-1 md:mt-6">
          <h1 className="stroke-text -mb-2 hidden font-black text-white sm:block sm:text-xl md:text-2xl">
            Programmer&apos;s
          </h1>
          <h1 className="hidden font-black text-white sm:block sm:text-xl md:text-2xl">
            University
          </h1>
        </div>
      </div>

      <div className="relative md:hidden">
        <input type="checkbox" id="menyAvPaa" />
        <label id="burger" htmlFor="menyAvPaa" onClick={handleMenuButtonClick}>
          <div></div>
          <div></div>
          <div></div>
        </label>
        <div id="meny">
          <ul className="absolute right-0 flex w-screen flex-col items-center gap-6 py-36 text-2xl">
            <li>
              <Link href="/" className="border-none">
                <span
                  className={`font-medium text-gray-200 hover:text-red-600 ${
                    router.pathname === '/' ? 'text-red-600' : ''
                  }`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/join/" className="border-none">
                <span
                  className={`font-medium text-gray-200 hover:text-red-600 ${
                    router.pathname === '/join' ? 'text-red-600' : ''
                  }`}
                >
                  Join
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about/" className="border-none">
                <span
                  className={`font-medium text-gray-200 hover:text-red-600 ${
                    router.pathname === '/about' ? 'text-red-600' : ''
                  }`}
                >
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact/" className="border-none">
                <span
                  className={`font-medium text-gray-200 hover:text-red-600 ${
                    router.pathname === '/contact' ? 'text-red-600' : ''
                  }`}
                >
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        ref={menu}
        className="hidden w-full flex-col text-end transition-all md:flex"
      >
        <ul className="mt-12 mr-3 flex flex-col gap-5 text-lg font-medium md:mt-0 md:flex-row md:justify-end md:gap-6 md:text-xl lg:gap-10">
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
            <Link href="/join/" className="border-none">
              <span
                className={`link-underline link-underline-black text-gray-700 hover:text-red-800 ${
                  router.pathname === '/join' ? 'link-active' : ''
                }`}
              >
                Join
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
    </nav>
  );
};

export default Header;
