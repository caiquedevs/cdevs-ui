import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Btn, BtnProps } from './styles';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
  children: ReactNode;
}

export function Button(props: IProps & BtnProps) {
  return (
    <Btn {...props}>
      {props.children}
      {props.loading ? <img src="./images/loading.svg" alt="loading" /> : null}
    </Btn>
  );
}
