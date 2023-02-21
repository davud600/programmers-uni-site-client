import type { ReactNode } from 'react';
import { useRef } from 'react';

import { useElementOnScreen } from '@/utils/ElementOnScreen';

const AnimateUp = ({
  children,
  delayAmount = 50,
  offDistance = 4,
}: {
  children: ReactNode;
  delayAmount?: number;
  offDistance?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  return (
    <div
      ref={ref}
      style={{
        transition: '500ms ease-in-out',
        transitionDelay: onScreen ? `${delayAmount}ms` : '0ms',
        translate: onScreen ? 'none' : `0 ${offDistance}rem`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimateUp;
