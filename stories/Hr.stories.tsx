import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hr } from '../src';

storiesOf('HR', module)
  .add('Default', () => <Hr />)
  .add('Label', () => <Hr label="Outras opções" />);
