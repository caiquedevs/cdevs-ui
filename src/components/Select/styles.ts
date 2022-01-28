import styled from 'styled-components';
import Select from 'react-select';

export const Label = styled.label`
  width: 300px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  span {
    font-size: 16px;
    line-height: 139.8%;
    color: 'silver';
  }

  span.error {
    color: orange;
  }
`;

export const ReactSelect = styled(Select)``;
