import React, { ButtonHTMLAttributes } from 'react';
import { Btn } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  height?: string;
  width?: string;
  padding?: string;
  margin?: string;

  bgColor?: string;
  color?: string;
  loading?: any;
  txtTransform?: 'uppercase' | 'capitalize' | 'lowercase';
  fontWeight?: string | number;
  fontSize?: string;
  borderRadius?: string;
  disabled: boolean;
}

export function Button(props: ButtonProps) {
  return (
    <Btn {...props}>
      {props.children}
      {props.loading ? <img src="./images/loading.svg" alt="loading" /> : null}
    </Btn>
  );
}
