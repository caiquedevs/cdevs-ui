import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../Button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = (args: any) => <Button {...args} />;
Default.args = { children: 'Default' };

export const Normal = () => (
  <Button
    disabled={false}
    width="300px"
    height="45px"
    bgColor="#FFB200"
    borderRadius="5px"
    color="#ffffff"
  >
    Normal
  </Button>
);

export const Disabled = () => (
  <Button
    disabled={true}
    width="300px"
    height="45px"
    bgColor="#FFB200"
    borderRadius="5px"
    color="#ffffff"
  >
    Disabled
  </Button>
);
