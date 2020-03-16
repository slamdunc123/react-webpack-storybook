import React from 'react';
import ReactDOM from 'react-dom';

// components
import MuiSelect from './components/MuiSelect/MuiSelect';
import AxiosTest from './components/AxiosTest/AxiosTest';

const App = () => {
	return (
		<>
			{/* <h3>App.js</h3> */}
			<MuiSelect />
			<AxiosTest />
		</>
	);
};

export default App;

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<App />, wrapper) : false;
