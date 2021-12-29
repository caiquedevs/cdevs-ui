import styled, { css } from "styled-components";

export interface StyleProps {
  width?: string;
  height?: string;
  margin?: string;
  borderColor?: string;

  label?: string;
}

export const Container = styled.div<StyleProps>`
  ${(props) => css`
    width: ${props.width};
    margin: ${props.margin};
  `}

  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 18px;

  hr {
    border: 0;

    ${(props) => css`
      height: ${props.height};
      border-top: ${props.height} solid ${props.borderColor};
    `}

    flex: 1;
    padding: 0;
    display: block;
  }
`;

Container.defaultProps = {
  margin: "0px",
  height: "1px",
  width: "500px",
  borderColor: "#bdbdbd",
};
