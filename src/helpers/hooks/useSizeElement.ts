import { useState, useRef, useEffect } from 'react';

const useSizeElement = () => {
  const elementRef = useRef<HTMLHeadingElement | null>(null);
  const [width, setWidth] = useState<number | undefined>(0);

  useEffect(() => {
    setWidth(elementRef.current?.clientWidth);
  }, []);

  return { width, elementRef };
};

export default useSizeElement;
