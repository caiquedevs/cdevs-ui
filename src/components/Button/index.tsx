import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Btn } from './styles';

export interface BtnProps {
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

  children: ReactNode;
}

export function Button(props: BtnProps) {
  return (
    <Btn {...props}>
      {props.children}
      {props.loading ? <img src="./images/loading.svg" alt="loading" /> : null}
    </Btn>
  );
}
