import { useEffect, useState } from 'react';

interface ScrollToTopButtonProps {
  wrapper: any;
}

const ScrollToTopButton = ({ wrapper }: ScrollToTopButtonProps) => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    setShowButton(() => wrapper?.current?.scrollTop >= 600);
  };

  useEffect(() => {
    wrapper?.current?.addEventListener('scroll', handleScroll);
    return () => wrapper?.current?.removeEventListener('scroll', handleScroll);
  }, [wrapper]);

  const scrollToTop = () => {
    wrapper?.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${
        showButton ? '' : 'hidden'
      } fade-in fixed bottom-0 right-0 z-10 m-12 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border-2 border-red-800 bg-red-800 fill-white drop-shadow-2xl transition-all hover:bg-transparent hover:fill-red-800`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        className="w-5"
      >
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
