import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';


import StreaCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './header';
import history from '../history';


const App = () => {

    return (

        <div>

            <Router history={history} >
                
                <div>
                    <h1><Header /></h1>
                    <Switch>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/create"  component={StreaCreate} />
                    <Route path="/streams/Edit/:id" component={StreamEdit} />
                    <Route path="/streams/show/:id" component={StreamShow} />
                     <Route path="/streams/delete/:id" component={StreamDelete} />
                    </Switch>
                    </div>
                    
            </Router>
        </div>


        
    );
}

export default App;