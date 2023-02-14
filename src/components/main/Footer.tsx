import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => {
  return (
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
  );
};

export default Footer;
