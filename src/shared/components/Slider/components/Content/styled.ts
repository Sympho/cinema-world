import styled from 'styled-components';

export const ContentBackground = styled.div`
  left: 0;
  right: 0;
`;

export const ContentBackgroundShadow = styled.div`
  left: 0;
  background: #000;
  width: 30%;
  z-index: 2;

  &:before {
    content: '';
    position: absolute;
    z-index: 10;
    background-image: linear-gradient(to right, #000, transparent);
    top: 0;
    bottom: 0;
    left: 100%;
    width: 275px;
  }
`;

export const ContentBackgroundImage = styled.div`
  right: 0;
  width: 70%;
  height: 100%;
  background-position: center 10%;
  background-size: cover;
  z-index: 1;
`;

export const ContentArea = styled.div`
  left: 0;
  right: 0;
  height: 100%;
  z-index: 3;
`;

export const ContentAreaContainer = styled.div`
  padding: 30px 70px;
  color: wheat;
`;

export const ContentTitle = styled.div`
  font-size: 45px;
  color: #fff;
  font-weight: 700;
`;

export const ContentDescription = styled.div`
  font-size: 18px;
  color: #999;
  margin-top: 20px;
  max-width: 500px;
`;

export const CloseContentButton = styled.div`
  cursor: pointer;
  color: #fff;
  width: 40px;
  height: 40px;
  background: transparent;
  outline: none;
  border: none;
  position: absolute;
  top: 30px;
  right: 30px;
`;

export const ContentWrapper = styled.div`
  position: relative;
  height: 37vw;
  margin-top: -40px;

  ${ContentBackground},
  ${ContentBackgroundShadow},
  ${ContentBackgroundImage},
  ${ContentArea} {
    position: absolute;
    top: 0;
    bottom: 0;
  } ;
`;
