import React, { ReactElement } from 'react';
import { Container } from './styles';

export interface StyleProps {
  width?: string;
  height?: string;
  margin?: string;
  borderColor?: string;

  label?: string;
}

export function Hr({ label, ...props }: StyleProps): ReactElement {
  return (
    <Container {...props}>
      {label ? <span>{label}</span> : null}
      <hr />
    </Container>
  );
}
