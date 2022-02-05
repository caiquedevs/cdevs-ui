import styled, { css } from 'styled-components';
import { SpaceProps } from '../../interfaces/spaces';

export interface GridProps extends SpaceProps {
  gap?: string;
  rows?: string;
  columns?: string;
  minMax?: { min: string; max: string };
}

export const Grid = styled.div<GridProps>`
  ${(props) => css`
    width: ${props.width};
    height: ${props.height};

    padding: ${props.padding};
    padding-top: ${props.pt};
    padding-right: ${props.pr};
    padding-bottom: ${props.pb};
    padding-left: ${props.pl};

    margin: ${props.margin};
    margin-top: ${props.mt};
    margin-right: ${props.mr};
    margin-bottom: ${props.mb};
    margin-left: ${props.ml};

    display: grid;
    gap: ${props.gap};
    grid-template-columns: ${props.minMax
      ? `repeat(auto-fit, minmax(${props.minMax.min}, ${props.minMax.max}))`
      : props.columns};
    grid-template-rows: ${props.rows};
  `}
`;

Grid.defaultProps = {
  width: 'auto',
  height: 'auto',

  padding: '0px',
  pt: '0px',
  pr: '0px',
  pb: '0px',
  pl: '0px',

  margin: '0px',
  mt: '0px',
  mr: '0px',
  mb: '0px',
  ml: '0px',

  columns: 'initial',
  rows: 'initial',
  gap: '0px',
};
