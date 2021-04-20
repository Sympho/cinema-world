import styled, { css } from 'styled-components';

export const StyleFieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 10px 0 15px;
  max-width: 400px;
`;

export const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 5px;
  color: #f3ae0b;
  font-size: 12px;
`;

const text = css`
  background: none;
  border: 2px solid rgba(243, 174, 11, 0.3);
  border-radius: 1px;
  padding: 8px 12px;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #f3ae0b;
  outline: none;
  transition: color 0.2s, border 0.2s, background 0.2s;

  :focus {
    color: #ffee0b;
    border-color: rgba(243, 174, 11, 0.5);
    background: rgba(243, 174, 11, 0.03);
  }
`;

export const StyledInput = styled.input`
  ${text};
`;

export const StyledTextarea = styled.textarea`
  ${text};
  resize: vertical;
  min-height: 50px;
  max-height: 300px;
`;

export const StyledSelect = styled.select`
  ${text};
  padding: 10px 8px;
`;
