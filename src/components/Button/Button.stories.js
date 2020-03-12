import React from 'react';
import Button from './Button';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Button',
	component: Button
};

export const ShowButton = () => <Button />;

export const ButtonText = () => (
	<Button onClick={action('clicked')}>Hello Button</Button>
);

export const ButtonClick = () => (
	<Button handleClick={action('clicked')}>Hello Button</Button>
);
