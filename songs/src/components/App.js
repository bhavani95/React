import React from 'react';
import { selectSong } from '../actions';
import SongList from './songList';
import SongDetails from '../components/SongDetails';

const App=()=>{
	
    return (
        <div className="ui container grid" >

            <div className="ui row">

                <div className="column eight wide">

                    <SongList />
                    
                </div>
                <div className="column eight wide">
                    <SongDetails />
                </div>
                </div>

        </div>);
}

export default App;