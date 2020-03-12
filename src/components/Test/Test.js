import React from 'react';
import Button from '../Button/Button';

const Test = () => {
	const handleClick = () => {
		console.log('click fired');
	};
	return (
		<div>
			<h2>Test Component</h2>
			<Button handleClick={handleClick} />
		</div>
	);
};

export default Test;
