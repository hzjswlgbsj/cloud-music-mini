import { getSingerInfoRequest } from "../../../api/request";

import { fromJS } from 'immutable';
import {
  CHANGE_ARTIST,
  CHANGE_SONGS_OF_ARTIST,
  CHANGE_ENTER_LOADING,
} from './constants';

const changeArtist = (data) => ({
  type: CHANGE_ARTIST,
  data: fromJS(data)
});
const changeSongs = (data) => ({
  type: CHANGE_SONGS_OF_ARTIST,
  data: fromJS(data)
});


//进场loading
export const changeEnterLoading = (data) => ({
  type: CHANGE_ENTER_LOADING,
  data
});


// 加载歌手信息
export const getSingerInfo = (id) => {
  return (dispatch) => {
    getSingerInfoRequest(id).then(data => {
      dispatch(changeArtist(data.artist));
      dispatch(changeSongs(data.hotSongs));
      dispatch(changeEnterLoading(false));
    }).catch((e) => {
      console.log('获取歌手信息数据失败', e);
    })
  }
};
