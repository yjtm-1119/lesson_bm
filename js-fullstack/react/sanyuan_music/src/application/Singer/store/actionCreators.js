import { getSingerInfoRequest } from './../../../api/request';
import { CHANGE_ARTIST } from './constants';

const changeArtist = (data) => ({
  type: CHANGE_ARTIST,
  data: data
});

export const getSingerInfo = (id) => {
  return dispatch => {
    console.log(id, '----------')
    getSingerInfoRequest(id)
      .then(data => {
        // console.log(data);
        dispatch(changeArtist(data.data.artist));
      })
  }
}