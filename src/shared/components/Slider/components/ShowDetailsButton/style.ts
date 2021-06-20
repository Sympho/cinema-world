import styled from 'styled-components';

export const Btn = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: opacity 300ms ease 100ms;
  background: transparent;
  border: 0;
  outline: none;
  width: 100%;

  span {
    display: block;
    width: 14px;
    margin: 0 auto;
    color: white;
  }
`;