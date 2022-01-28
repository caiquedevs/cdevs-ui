import styled, { css } from 'styled-components';
import { SpaceProps } from '../../interfaces/spaces';
import { FlexProps } from '../../interfaces/flex';

export const Row = styled.div<SpaceProps & FlexProps>`
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

    display: flex;
    flex: ${props.flex};
    flex-direction: ${props.direction};
    align-items: ${props.align};
    justify-content: ${props.justify};
    flex-wrap: ${props.wrap};
    gap: ${props.gap};

    position: relative;
  `}
`;

Row.defaultProps = {
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

  flex: 'initial',
  direction: 'row',
  align: 'flex-start',
  justify: 'flex-start',
  wrap: 'wrap',
  gap: '0px',
};
