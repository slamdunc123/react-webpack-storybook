import React from 'react';

const Button = ({ handleClick }) => {
	return <button onClick={() => handleClick()}>My Button</button>;
};

export default Button;
