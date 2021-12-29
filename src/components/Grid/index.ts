import styled, { css } from "styled-components";

interface IProps {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  gap?: string;

  rows?: string;
  columns: string;
}

export const Grid = styled.div<IProps>`
  ${(props) => css`
    width: ${props.width};
    height: ${props.height};
    padding: ${props.padding};
    margin: ${props.margin};
    gap: ${props.gap};
    grid-template-columns: ${props.columns};
    grid-template-rows: ${props.rows};
  `}

  display: grid;
`;

Grid.defaultProps = {
  width: "auto",
  height: "auto",
  padding: "0px",
  margin: "0px",

  columns: "repeat(auto-fit, minmax(300px, 1fr))",
  rows: "initial",
  gap: "0px",
};
