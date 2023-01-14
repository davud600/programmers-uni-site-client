import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useRef } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const menu = useRef<any>();

  function handleMenuButtonClick() {
    menu.current.classList.toggle('hidden');
  }

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      {props.meta}

      <div className="mx-auto">
        <div className="flex justify-between border-b border-gray-300 p-7">
          <span>Logo</span>
          <div>
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
              <ul className="mt-12 mr-5 flex-wrap gap-5 text-xl md:mt-0 md:flex md:justify-end md:gap-10 lg:gap-20">
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

        <div className="content py-5 text-xl">{props.children}</div>

        <div className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.title}.
          {/* <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>. */}
        </div>
      </div>
    </div>
  );
};

export { Main };
