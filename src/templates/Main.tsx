import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useRef, useState } from 'react';

import Hexagon from '@/components/Hexagon';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const menu = useRef<any>();
  const wrapper = useRef<any>();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const router = useRouter();

  const handleMenuButtonClick = () => {
    setNavbarOpen((prev) => !prev);
    wrapper.current.classList.toggle('!overflow-hidden');
  };

  return (
    <div
      ref={wrapper}
      className="wrapper w-full overflow-y-hidden text-gray-700 antialiased"
    >
      {props.meta}

      <div>
        <Image // w-8/12
          className="main-hexagons absolute -top-40 -left-20 -z-10 -rotate-12 md:-top-72"
          src="/assets/images/hexagon.svg"
          height={2000}
          width={2000}
          alt="Not Found"
          quality={100}
        />
        <Image
          className="main-hexagons absolute -right-28 top-60 -z-10 -rotate-12 opacity-5 md:right-0 md:top-72"
          src="/assets/images/hexagon-black.svg"
          height={2000}
          width={2000}
          alt="Not Found"
          quality={100}
        />
      </div>

      <div className="small-hexagons">
        <Hexagon
          initialRotation={12}
          z={-6}
          wrapper={wrapper}
          classes="hexagon-one w-16"
        />
        <Hexagon
          initialRotation={69}
          z={-12}
          wrapper={wrapper}
          classes="hexagon-two w-20"
        />
        <Hexagon
          initialRotation={100}
          z={-8}
          wrapper={wrapper}
          classes="hexagon-three w-20"
        />
        <Hexagon
          initialRotation={40}
          z={-12}
          wrapper={wrapper}
          classes="hexagon-four w-20"
        />
        <Hexagon
          initialRotation={22}
          z={-9}
          wrapper={wrapper}
          classes="hexagon-five w-20"
        />
        <Hexagon
          initialRotation={91}
          z={-4}
          wrapper={wrapper}
          classes="hexagon-six w-20"
        />
        <Hexagon
          initialRotation={11}
          z={-4}
          wrapper={wrapper}
          classes="hexagon-seven w-16"
        />
        <Hexagon
          initialRotation={4}
          z={-7}
          wrapper={wrapper}
          classes="hexagon-eight w-20"
        />
      </div>

      <div className="relative mx-auto">
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
            <label
              id="burger"
              htmlFor="menyAvPaa"
              onClick={handleMenuButtonClick}
            >
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

        {!navbarOpen && (
          <div className="content py-5 text-xl">{props.children}</div>
        )}

        {navbarOpen && <div className="py-44 sm:py-40"></div>}

        <footer className="mt-48 bg-red-900 py-6 px-8 sm:px-20 md:px-24">
          <div className="md:flex md:justify-between">
            <div className="mb-6 flex items-start md:mb-0">
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
            <div className="footer-payment-methods">
              <img
                src="https://bank.paysera.com/assets/image/payment_types/xk_procreditbank.png"
                alt="ProCredit Bank"
              />
              <img
                src="https://bank.paysera.com/assets/image/payment_types/xk_raiffeisenbank.png"
                alt="Raiffeisen Bank"
              />
              <img
                src="https://bank.paysera.com/assets/image/payment_types/xk_nlbbank.png"
                alt="NLB Bank"
              />
              <img
                src="https://bank.paysera.com/assets/image/payment_types/xk_tebbank.png"
                alt="TEB Bank"
              />
              <img
                src="https://bank.paysera.com/assets/image/payment_types/xk_bktbank.png"
                alt="BKT Bank"
              />
              <img
                src="https://bank.paysera.com/assets/image/payment_types/xk_isbank.png"
                alt="IS Bank"
              />
              <img
                src="https://bank.paysera.com/assets/image/payment_types/xk_bankaekonomike.png"
                alt="Banka Ekonomike"
              />
              <img
                src="https://bank.paysera.com/assets/image/payment_types/xk_ziraatbank.png"
                alt="Ziraat Bank"
              />
              <img
                src="https://bank.paysera.com/assets/image/payment_types/xk_komercialnabank.png"
                alt="Komercijalna Banka"
              />
              <img
                src="https://bank.paysera.com/assets/image/payment_types/xk_bpb.png"
                alt="BPB Bank"
              />
              <img
                src="https://bank.paysera.com/assets/image/payment_types/wallet.png"
                alt="Paysera account"
              />
              <img
                src="https://bank.paysera.com/assets/image/payment_types/card.png"
                alt="Payment cards"
              />
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
          <div className="mt-8 flex justify-start pb-5 md:justify-center">
            <span className="mx-8 mt-4 text-sm text-gray-200 opacity-60 md:mx-0 md:mt-0">
              © Copyright {new Date().getFullYear()} {AppConfig.title}.{' '}
            </span>
            <div className="mt-4 flex md:m-0 md:ml-4">
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
