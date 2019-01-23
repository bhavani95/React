import { combineReducers } from 'redux';



const songReducers = () => {

    return[


        {
            title: 'Chain Smokers', duration: '04:20'
        },
        {
            title: 'Love me like you do', duration: '04:10'
        },
        {
            title: 'shape of you', duration: '03:10'
        },
        {
            title: 'happiness', duration: '02:10'
        }


    ];
};

const selectedSongReducer = (selectedSong = null, action) => {


    if (action.type === "SONG_SELECTED") {

        return action.payload;

    }

    return selectedSong;



};

export default combineReducers({
    songs: songReducers,
    selectedSong: selectedSongReducer


});




  