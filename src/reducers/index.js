import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Space Oddity', duration: '4:05' },
    { title: 'Young Americans', duration: '3:15' },
    { title: 'Is There Life on Mars', duration: '4:20' },
    { title: 'Loving the Alien', duration: '3:45' }
  ]
};

const selectedSongReducer =  (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
