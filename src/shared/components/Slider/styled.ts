import styled from 'styled-components';

export const Container = styled.div`
  &.slider {
    display: flex;
    position: relative;

    //&__container {
    //  display: flex;
    //  padding: 0 55px;
    //  transition: transform 300ms ease 100ms;
    //  z-index: 3;
    //  width: 100%;
    //}

    :not(&--open) .item:hover .show-details-button {
      opacity: 1;
    }

    :not(&--open) .item:hover {
      transform: scale(1.5) !important;
    }

    :not(&--open):hover .item {
      transform: translateX(-25%);
    }

    :not(&--open) .item:hover ~ .item {
      transform: translateX(25%);
    }
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  padding: 0 55px;
  transition: transform 300ms ease 100ms;
  z-index: 3;
  width: 100%;
`;
