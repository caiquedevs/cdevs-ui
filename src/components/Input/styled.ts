import styled from 'styled-components';

import { InputProps } from '../Input';

export const Label = styled.label<InputProps>`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 7px;

  span {
    font-size: 16px;
    color: ${(props) => (props.inputProps.disabled ? '#7e7e7e' : '#000000')};
  }

  input {
    width: 100%;
    height: 45px;
    padding: 0 15px;

    font-weight: normal;
    font-size: 17px;
    line-height: 139.8%;
    color: #000000;

    border: 2px solid transparent;
    border-color: ${({ error }) => (error ? 'orange' : 'transparent')};
    border-radius: 5px;
    background-color: #ededed;

    &:disabled {
      cursor: default;
      background-color: #c0c0c0;

      ::placeholder {
        color: #ffffff;
      }
    }
  }

  span.error {
    color: orange;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;
