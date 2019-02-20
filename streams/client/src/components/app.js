import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';


import StreaCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreaShow from './streams/StreamShow';
import Header from './header';


const App = () => {

    return (

        <div>
            
            <BrowserRouter>
                
                <div>
                    <h1><Header /></h1>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/create"  component={StreaCreate} />
                    <Route path="/streams/Edit" component={StreamEdit} />
                    <Route path="/streams/show" component={StreaShow} />
                    <Route path="/streams/delete" component={StreamDelete} />
                    </div>
                    
            </BrowserRouter>
        </div>


        
    );
}

export default App;