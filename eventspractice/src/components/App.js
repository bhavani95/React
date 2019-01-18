import React from 'react';
import SearchBar from './SearchBar';
import { green } from 'ansi-colors';




class App extends React.Component {


    onSend(term) {

        console.log(term);
    
    }

    render() {

        return (<div className="ui container" style={{
            marginTop: '10px'
        }}>
            <SearchBar onSubmit={this.onSend} />
        </div>
        );
    }
}

export default App;
