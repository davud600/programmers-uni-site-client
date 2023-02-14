import Image from 'next/image';

const BigHexagons = () => {
  return (
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
  );
};

export default BigHexagons;
