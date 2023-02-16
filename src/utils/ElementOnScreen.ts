import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

export function useElementOnScreen(
  ref: RefObject<Element>,
  rootMargin = '0px'
) {
  const [isIntersecting, setIsIntersecting] = useState<any>(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry?.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
}
