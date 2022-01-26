import React, { InputHTMLAttributes, ReactElement } from 'react';
import { Label } from './styled';

export interface InputProps {
  label?: string;
  error: string | number | boolean | null | undefined;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}

export function Input({ label, error, inputProps, ...props }: InputProps): ReactElement {
  return (
    <Label {...props} error={error} inputProps={inputProps}>
      {label ? <span>{label}</span> : null}

      <input {...inputProps} />

      {error ? <span className="error">{error}</span> : null}
    </Label>
  );
}
