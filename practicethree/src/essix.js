//This file is to show the new features introduced in es6.

//use https://webapplog.com/es6/

//import react and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

//create component


function sum(a, b = 10) {
    return a + b;
}

const Abc = () => {

    return (<div>

        {sum(10, 20)}
        {sum(10)}


    </div>);

}

//Template Literals

var a = "bhavani"
var b = "Kuppagiri"

//Template literals reduces the burden of using '+' operators
function fullname(a, b) {

    return `${a} ${b}`;
}




//render

ReactDOM.render(</Abc >, document.querySelector(#node));

