import React from 'react'
import ReactDOM from "react-dom";

const App = () => {
    return (
        <>
            <h3>App.js</h3>
        </>
    )
}

export default App

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
