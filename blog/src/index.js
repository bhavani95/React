import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import App from './components/app.js';
import reducers from './reducers';

const st = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(

    <Provider store={st}>
        <App />
    </Provider>,

    document.querySelector('#root')
);