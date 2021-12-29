import styled from 'styled-components';

export const BtnCheck = styled.label`
  width: max-content;

  display: flex;
  align-items: center;
  gap: 10px;

  position: relative;
  z-index: 1;

  user-select: none;
  cursor: pointer;

  input[type='checkbox'] {
    appearance: none;
    display: none;
  }

  span.container-check {
    width: 64px;
    height: 24px;

    background: #ee5253;
    border-radius: 20px;
    transition: 0.3s;
  }

  span.circle {
    width: 26px;
    height: 12px;

    position: absolute;
    top: 6px;
    left: 6px;
    transition: 0.2s;

    border-radius: 20px;
    background: #ffffff;
  }

  input[type='checkbox']:disabled ~ span.circle {
    background: #ffffff;
  }

  input[type='checkbox']:disabled ~ span.container-check {
    background: #c0c0c0;
  }

  input[type='checkbox']:checked ~ span.circle {
    left: 32px;
    background: #ffffff;
  }

  input[type='checkbox']:checked ~ span.container-check {
    background: greenyellow;
  }
`;
