import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';
import Test from './Test';

export default {
  title: 'Test',
  component: Test,
};

export const RenderComponent = () => <Test />;

export const ButtonClick = () => <button onClick={action('clicked')}>Test Button</button>;

// RenderTest.story = {
//   name: 'render component',
// };



