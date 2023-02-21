import type { ReactNode } from 'react';
import { useRef } from 'react';

import { useElementOnScreen } from '@/utils/ElementOnScreen';

const AnimateLeft = ({
  children,
  delayAmount = 50,
  offDistance = 7,
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
        transition: `500ms ease-in-out`,
        transitionDelay: onScreen ? `${delayAmount}ms` : '0ms',
        translate: onScreen ? 'none' : `${offDistance}rem 0`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimateLeft;
