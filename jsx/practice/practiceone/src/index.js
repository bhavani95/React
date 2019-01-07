//import react and react dom

import React from 'react';
import ReactDOM from 'react-dom';


function getButtonText() {

    return 'Click Me!';
}


//react component 



const App = () => {

    //const buttonName = 'Click Me!';

    return (
        <div>
            <label className='label' for='name'>Enter Name:</label>
            <input id='name' type='text' />
            <button style={{ backgroundColor: "blue", color: "white" }}>{getButtonText()}</button>
        </div>
    );
};




//render dom

ReactDOM.render(<App />, document.querySelector('#root'));




