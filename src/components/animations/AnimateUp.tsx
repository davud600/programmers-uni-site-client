import type { ReactNode } from 'react';
import { useRef } from 'react';

import { useElementOnScreen } from '@/utils/ElementOnScreen';

const AnimateUp = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  return (
    <div
      ref={ref}
      style={{
        translate: onScreen ? 'none' : '0 8rem',
        transition: '500ms ease-in-out',
      }}
    >
      {children}
    </div>
  );
};

export default AnimateUp;
