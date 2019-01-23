import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ song }) => {
    //console.log(props);

    if (!song) {
        return <div>Select a song</div>
    }

    return (
        <>
        <h1>Song Details</h1>
        <p>Title: {song.title} </p>
            <p>Duration :{song.duration}</p>
            </>


    );
};


const mapStateToProps = (state) => {


    return {song:state.selectedSong}


};

export default connect(mapStateToProps)(SongDetails);
