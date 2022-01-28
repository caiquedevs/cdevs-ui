import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Select } from '../src';

storiesOf('Select', module).add('Default', () => {
  const [selected, setSelected] = useState(null);
  const option = [
    { value: 'sp', label: 'São Paulo' },
    { value: 'rj', label: 'Rio de janeiro' },
  ];

  const handleChange = (option: any) => setSelected(option);

  return (
    <Select
      options={option}
      value={selected}
      onChange={handleChange}
      error={false}
      disabled={false}
      loading={false}
    />
  );
});
