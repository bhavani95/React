//import 

import React from 'react';
import ReactDOM from 'react-dom';

//create component


class App extends React.Component {

    render(){

    return (
        <div>
            <Header />
            <Content />
        </div>

    );
}
}

class Header extends React.Component {

    render(){

    return (

        <div>
            <h1>This is Header</h1>
            <h2> Header followed by Content</h2>
        </div>
   );
}
}

class Content extends React.Component {

    render(){

    return (

        <div>
            <h2>This is Content Section</h2>
            <ul>
                <li>
                    Created by Bhavani on 01/07/2019 09:38 PM

                </li>
            </ul>
        </div>
    );
}
}



//render dom

ReactDOM.render(<App />, document.querySelector('#root'));
