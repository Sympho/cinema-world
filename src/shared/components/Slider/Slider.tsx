import { useState, Children, FC } from 'react';

import SliderContext from 'shared/contexts/slider';
import Content from './components/Content';
import SlideButton from './components/SlideButton';
import SliderWrapper from './components/SliderWrapper';
import useSliding from 'helpers/hooks/useSliding';
import useSizeElement from 'helpers/hooks/useSizeElement';
import { Container, SliderContainer } from './styled';
import { MovieType } from 'store/types';
import { SliderProps } from './types';

const Slider: FC<SliderProps> = ({ children, activeSlide }) => {
  const [currentSlide, setCurrentSlide] = useState<
    MovieType | null | undefined
  >(activeSlide);
  const { width, elementRef } = useSizeElement();
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev,
  } = useSliding(width, Children.count(children));

  const handleSelect = (movie: MovieType) => {
    setCurrentSlide(movie);
  };

  const handleClose = () => {
    setCurrentSlide(null);
  };

  const contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef,
    currentSlide,
  };

  return (
    <SliderContext.Provider value={contextValue}>
      <SliderWrapper>
        <Container ifOpenSlider={currentSlide}>
          <SliderContainer ref={containerRef} {...slideProps}>
            {children}
          </SliderContainer>
        </Container>
        {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
        {hasNext && <SlideButton onClick={handleNext} type="next" />}
      </SliderWrapper>
      {currentSlide && <Content movie={currentSlide} onClose={handleClose} />}
    </SliderContext.Provider>
  );
};

export default Slider;
