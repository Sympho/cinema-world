import styled from 'styled-components';

type WrapperProps = {
  isActive?: boolean | null;
};

export const Wrapper = styled.div<WrapperProps>`
  .item {
    flex: 0 0 19.7%;
    transition: transform 300ms ease 100ms;
    margin: 0 2px;
    position: relative;

    //img {
    //  height: 100%;
    //  width: 100%;
    //  vertical-align: top;
    //}
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  vertical-align: top;
`;
