import type { ReactNode } from 'react';
import { useRef } from 'react';

import { useElementOnScreen } from '@/utils/ElementOnScreen';

const AnimateLeft = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  return (
    <div
      ref={ref}
      style={{
        translate: onScreen ? 'none' : '8rem 0',
        transition: '500ms ease-in-out',
      }}
    >
      {children}
    </div>
  );
};

export default AnimateLeft;
