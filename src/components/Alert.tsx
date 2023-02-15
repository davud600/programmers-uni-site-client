import { useRef } from 'react';

/* eslint-disable no-nested-ternary */
type AlertType = 'danger' | 'success' | 'info';

interface AlertProps {
  type: AlertType;
  message: string;
}

const Alert = ({ type, message }: AlertProps) => {
  const alertElem = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={alertElem}
      className={`mb-4 flex rounded-lg px-2 py-3 drop-shadow-xl md:px-4 md:py-6 ${
        type === 'danger'
          ? 'bg-red-50'
          : type === 'success'
          ? 'bg-green-50'
          : 'bg-blue-50'
      } p-4 ${
        type === 'danger'
          ? 'text-red-800'
          : type === 'success'
          ? 'text-green-800'
          : 'text-blue-800'
      }`}
      role="alert"
    >
      <svg
        aria-hidden="true"
        className="mr-1 mt-1 h-5 w-5 shrink-0 md:mr-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="sr-only">Info</span>
      <div className="mr-1 text-sm font-medium md:mr-4 md:text-lg">
        {message}
      </div>
      <button
        type="button"
        className={`inline-flex h-7 w-7 rounded-lg md:h-8 md:w-8 ${
          type === 'danger'
            ? 'bg-red-100'
            : type === 'success'
            ? 'bg-green-100'
            : 'bg-blue-100'
        } p-1.5 ${
          type === 'danger'
            ? 'text-red-500'
            : type === 'success'
            ? 'text-green-500'
            : 'text-blue-500'
        } ${
          type === 'danger'
            ? 'hover:bg-red-200'
            : type === 'success'
            ? 'hover:bg-green-200'
            : 'hover:bg-blue-200'
        } transition-all focus:ring-2 ${
          type === 'danger'
            ? 'focus:ring-red-400'
            : type === 'success'
            ? 'focus:ring-green-400'
            : 'focus:ring-blue-400'
        }`}
        aria-label="Close"
        onClick={() => alertElem.current?.classList.add('hidden')}
      >
        <span className="sr-only">Close</span>
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Alert;
