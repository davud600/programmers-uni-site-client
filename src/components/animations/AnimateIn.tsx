import type { ReactNode } from 'react';
import { useRef } from 'react';

import { useElementOnScreen } from '@/utils/ElementOnScreen';

const AnimateIn = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  return (
    <div
      ref={ref}
      style={{
        opacity: onScreen ? 1 : 0,
        translate: onScreen ? 'none' : '0 2rem',
        transition: '500ms ease-in-out',
      }}
    >
      {children}
    </div>
  );
};

export default AnimateIn;
