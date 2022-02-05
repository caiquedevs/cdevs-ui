import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { CheckBox } from '../CheckBox';

storiesOf('CheckBox', module)
  .add('Default', () => {
    const [checked, setChecked] = useState(false);
    const option = { value: 'checkbox', label: 'checkbox' };

    const handleChange = (option: any) => setChecked(!checked);

    return <CheckBox option={option} onChange={handleChange} checked={checked} />;
  })
  .add('Label', () => {
    const [checked, setChecked] = useState(false);
    const option = { value: 'checkbox', label: 'checkbox' };

    const handleChange = (option: any) => setChecked(!checked);

    return (
      <CheckBox
        option={option}
        onChange={handleChange}
        checked={checked}
        label="Assinar esta oferta"
      />
    );
  })
  .add('Disabled', () => {
    const [checked, setChecked] = useState(false);
    const option = { value: 'checkbox', label: 'checkbox' };
    const handleChange = (option: any) => setChecked(!checked);

    return (
      <CheckBox
        option={option}
        onChange={handleChange}
        checked={checked}
        disabled={true}
      />
    );
  });
