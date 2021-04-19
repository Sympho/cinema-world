import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 0 55px;

  // TODO im not sure about this check how this implementing .container:hover .item { transform: translateX(-25%); }
  :hover.ChildElement {
    transform: translateX(-25%);
  }
`;

export const Item = styled.div`
  background: green;
  flex: 0 0 19.7%;
  text-align: center;
  margin: 0 2px;
  transition: transform 300ms ease 100ms;

  &&&& {
    :hover {
      transform: scale(1.5);
    }
  }

  // TODO im not sure about this check how this implementing .item:hover ~ .item { transform: translateX(25%); }
`;
