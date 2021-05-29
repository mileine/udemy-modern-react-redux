 import { combineReducers } from 'redux';


export const songsReducer = () => {
  return [
    { title: 'Here comes the sun', duration: '3:04'},
    { title: 'Macarena', duration: '2:24'},
    { title: 'All Star', duration: '3:15'},
    { title: 'I Want It That Way', duration: '1:45'}
  ];
};

export const selectSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer
})