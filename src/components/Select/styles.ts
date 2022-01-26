import styled from 'styled-components';

export const Label = styled.label`
  width: 300px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  span {
    font-size: 16px;
    line-height: 139.8%;
    color: ${({ theme }) => theme.text.title};
  }

  span.error {
    color: ${({ theme }) => theme.primary};
  }
`;
