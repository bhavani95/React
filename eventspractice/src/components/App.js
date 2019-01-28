import React from 'react';
import Axios from 'axios';
import ImageList from './images';
import SearchBar from './SearchBar';
import Unsplash from '../axios/unsplash';
//import { green } from 'ansi-colors';





class App extends React.Component {


    state = { images: [] };


    onSend = async (term) => {

        const response = await Unsplash .get('/search/photos', {

            params: {query: term }
          

         });

         this.setState({ images: response.data.results  });
    
    }

    render() {

        return (<div className="ui container" style={{
            marginTop: '10px'
        }}>
            <SearchBar onSubmit={this.onSend} />
            <ImageList images={this.state.images} />
        </div>
        );
    }
}

export default App;
