import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const Hexagon = ({
  wrapper,
  classes,
  z,
  initialRotation,
}: {
  wrapper: any;
  classes: string;
  z: number;
  initialRotation: number;
}) => {
  const smallHexagon = useRef<any>();
  const size = useWindowSize();

  let rotationAmount = initialRotation;
  let lastScroll = 0;
  const randomNum = Math.random();
  const rotationSpeed = randomNum * 1.5 < 0.6 ? randomNum * 2 : randomNum * 1.5;
  const rotationDir = Math.random() >= 0.5 ? -1 : 1;
  const threshold = 0.5;
  let scale = 1.75;

  const handleScroll = () => {
    rotationAmount +=
      wrapper.current.scrollTop - lastScroll > threshold
        ? -rotationSpeed * rotationDir
        : rotationSpeed * rotationDir;

    lastScroll = wrapper.current.scrollTop;

    rotationAmount =
      rotationAmount >= 359 && rotationAmount <= 361 ? 0 : rotationAmount;
    rotationAmount =
      rotationAmount <= -359 && rotationAmount >= -361 ? 0 : rotationAmount;

    // WARNING: If you change translateZ value don't forget to change it in the global.css too
    smallHexagon.current.style.transform = `scale(${scale}) translateZ(${z}px) rotate(${rotationAmount}deg)`;
  };

  useEffect(() => {
    scale = size.width < 768 ? 1.6 : 1.75;
    scale = size.width < 640 ? 1.5 : scale;
    wrapper?.current?.addEventListener('scroll', handleScroll);
    return () => wrapper?.current?.removeEventListener('scroll', handleScroll);
  }, [size]);

  return (
    <>
      <Image
        ref={smallHexagon}
        className={`absolute opacity-5 ${classes}`}
        src="/assets/images/hexagon-black.svg"
        height={2000}
        width={2000}
        alt="Not Found"
        quality={100}
      />
    </>
  );
};

export default Hexagon;
