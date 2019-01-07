//import react and react components
import React from 'react';
import ReactDOM from 'react-dom';

//create a react Component

const App = () => {
    return <div>
        <p>
            This is my first react app created on 01/05/2019 - Bhavani!</p>
        <ul>
            <li>
                Masters in Applied Computer Science</li>
            <li> Graduated in Dec 2018</li>
        </ul>
        </div>

};

//Take the react component and show it on browser

ReactDOM.render(<App />, document.querySelector('#root'));



