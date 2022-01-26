import React, { ReactElement } from 'react';

import { BtnCheck } from './styles';

interface CheckBoxProps {
  option: any;
  checked: any;
  onChange: (value: string) => void;
  label?: string;
  disabled?: boolean;
}

export function CheckBox({
  option,
  onChange,
  checked,
  label,
  disabled,
}: CheckBoxProps): ReactElement {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(option);
  };

  return (
    <BtnCheck htmlFor={option.value}>
      <input
        type="checkbox"
        id={option.value}
        name={option.value}
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
      />

      <span className="container-check" />
      <span className="circle" />

      {label ? <span>{label!}</span> : null}
    </BtnCheck>
  );
}
