import styled, { css } from 'styled-components';

export const StyleFieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 10px 0 15px;
  max-width: 500px;
`;

export const StyleInputBox = styled.div`
  border-radius: 5px;
  background: rgba(243, 174, 11, 0);
  box-shadow: inset 0 0 0 2px rgba(243, 174, 11, 0.3);
  transition: color 0.2s, box-shadow 0.2s, background 0.2s;

  :focus-within {
    box-shadow: inset 0 0 0 2px rgba(243, 174, 11, 0.6);
    background: rgba(243, 174, 11, 0.03);
  }
`;

export const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 5px;
  color: #f3ae0b;
  font-size: 12px;
`;

const text = css`
  background: none;
  border: none;
  padding: 8px 12px;
  height: 42px;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #f3ae0b;
  outline: none;
  transition: color 0.2s, box-shadow 0.2s, background 0.2s;

  :focus {
    color: rgba(243, 174, 11, 1);
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
