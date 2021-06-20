import { useState, useRef, useEffect } from 'react';

import { PADDINGS } from 'shared/constants/slider';

const useSliding = (elementWidth: any, countElements: any) => {
  const containerRef = useRef<HTMLHeadingElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);
  const [totalInViewport, setTotalInViewport] = useState<number>(0);
  const [viewed, setViewed] = useState<number>(0);

  useEffect(() => {
    const containerWidth = containerRef.current!.clientWidth - PADDINGS;

    setContainerWidth(containerWidth);
    setTotalInViewport(Math.floor(containerWidth / elementWidth));
  }, [elementWidth]);

  const handlePrev = () => {
    setViewed(viewed - totalInViewport);
    setDistance(distance + containerWidth);
  };

  const handleNext = () => {
    setViewed(viewed + totalInViewport);
    setDistance(distance - containerWidth);
  };

  const slideProps = {
    style: { transform: `translate3d(${distance}px, 0, 0)` },
  };

  const hasPrev = distance < 0;
  const hasNext = viewed + totalInViewport < countElements;

  return { handlePrev, handleNext, slideProps, containerRef, hasPrev, hasNext };
};

export default useSliding;
