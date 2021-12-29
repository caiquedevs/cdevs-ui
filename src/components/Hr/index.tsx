import React, { ReactElement } from "react";
import { Container, StyleProps } from "./styles";

export function Hr({ label, ...props }: StyleProps): ReactElement {
  return (
    <Container {...props}>
      {label ? <span>{label}</span> : null}
      <hr />
    </Container>
  );
}
