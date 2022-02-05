import React, { useState, CSSProperties, ChangeEvent } from 'react';
import { storiesOf } from '@storybook/react';
import { MdSearch } from 'react-icons/md';
import { Input } from '../Input';

const inputStyle: CSSProperties = {};

storiesOf('Input', module)
  .add('Default', () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };

    return (
      <Input
        label="Preencha seu nome"
        error=""
        inputProps={{
          type: 'text',
          style: inputStyle,
          value: inputValue,
          onChange: handleChange,
          placeholder: 'Informe seu nome',
        }}
      />
    );
  })
  .add('Error', () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };

    return (
      <Input
        label="Preencha seu nome"
        error="Campo obrigatório"
        inputProps={{
          type: 'text',
          style: inputStyle,
          value: inputValue,
          onChange: handleChange,
          placeholder: 'Informe seu nome',
        }}
      />
    );
  })
  .add('Disabled', () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };

    return (
      <Input
        label="Preencha seu nome"
        error=""
        inputProps={{
          type: 'text',
          style: inputStyle,
          value: inputValue,
          onChange: handleChange,
          placeholder: 'Informe seu nome',
          disabled: true,
        }}
      />
    );
  });
