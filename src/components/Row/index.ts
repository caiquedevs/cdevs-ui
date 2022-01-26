import styled, { css } from 'styled-components';

interface RowProps {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;

  flex?: string;
  direction?: string;
  align?: string;
  justify?: string;
  wrap?: string;
  gap?: string;
}

export const Row = styled.div<RowProps>`
  ${(props) => css`
    width: ${props.width};
    height: ${props.height};
    padding: ${props.padding};
    margin: ${props.margin};

    display: flex;
    flex: ${props.flex};
    flex-direction: ${props.direction};
    align-items: ${props.align};
    justify-content: ${props.justify};
    flex-wrap: ${props.wrap};
    gap: ${props.gap};
  `}
`;

Row.defaultProps = {
  width: 'auto',
  height: 'auto',
  padding: '0px',
  margin: '0px',

  flex: 'initial',
  direction: 'row',
  align: 'flex-start',
  justify: 'flex-start',
  wrap: 'wrap',
  gap: '0px',
};
