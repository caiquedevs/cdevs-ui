import styled, { css } from 'styled-components';
import { ButtonProps } from '../Button';

export const Btn = styled.button<ButtonProps>`
  ${(props) => css`
    width: ${props.width};
    height: ${props.height};
    padding: ${props.padding};
    margin: ${props.margin};

    color: ${props.color};
    font-weight: ${props.fontWeight};
    text-transform: ${props.txtTransform};
    font-size: ${props.fontSize};

    border-radius: ${props.borderRadius};
    background-color: ${props.bgColor};
  `}

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border: none;
  user-select: none;
  transition: 0.3s filter;
  cursor: pointer;

  &:hover:not(:disabled) {
    filter: brightness(0.85);
  }

  &:active {
    filter: brightness(0.6);
  }

  &:disabled {
    background-color: #c0c0c0;
    cursor: default;
  }
`;

Btn.defaultProps = {
  width: 'auto',
  height: 'auto',
  padding: '0px',
  margin: '0px',

  color: '#000000',
  fontWeight: 600,
  txtTransform: 'uppercase',
  bgColor: 'transparent',
};
