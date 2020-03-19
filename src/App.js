import React from 'react';
import ReactDOM from 'react-dom';
import RagReport from './components/RagReport/RagReport';

// components
// import Mui from './components/MuiSelect/Mui';
// import AxiosTest from './components/AxiosTest/AxiosTest';

const App = () => {
	return (
		<>
			{/* <h3>App.js</h3> */}
			{/* <Mui /> */}
			<RagReport />
			{/* <AxiosTest /> */}
		</>
	);
};

export default App;

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<App />, wrapper) : false;
