import type { ReactNode } from 'react';
import { useRef } from 'react';

import BigHexagons from '@/components/main/BigHexagons';
import Footer from '@/components/main/Footer';
import Header from '@/components/main/Header';
import SmallHexagons from '@/components/main/SmallHexagons';
import ScrollToTopButton from '@/components/ScrollToTopButton';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const wrapper = useRef<any>();

  return (
    <>
      <ScrollToTopButton wrapper={wrapper} />
      <div
        ref={wrapper}
        className="wrapper w-full overflow-y-hidden text-gray-700 antialiased"
      >
        {props.meta}

        <BigHexagons />
        <SmallHexagons wrapper={wrapper} />

        <div className="relative mx-auto">
          <Header wrapper={wrapper} />
          <div className="content py-5 text-xl">{props.children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export { Main };
