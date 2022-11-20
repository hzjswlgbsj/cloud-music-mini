import { getVideoDetail, getRelatedVideos } from "../../../api/request";

import { fromJS } from 'immutable';
import {
  CHANGE_DETAIL,
  CHANGE_RELATED_VIDEOS,
  CHANGE_ENTER_LOADING,
} from './constants';

const changeDetail = (data) => ({
  type: CHANGE_DETAIL,
  data: fromJS(data)
});
const changeRelatedVidoes = (data) => ({
  type: CHANGE_RELATED_VIDEOS,
  data: fromJS(data)
});


//进场loading
export const changeEnterLoading = (data) => ({
  type: CHANGE_ENTER_LOADING,
  data
});


// 加载歌手信息
export const getVideoInfo = (id) => {
  return (dispatch) => {
    getVideoDetail(id).then(data => {
      dispatch(changeDetail(data.data));
      dispatch(changeEnterLoading(false));
    }).catch((e) => {
      console.log('获取mv详情数据失败', e);
    })
    getRelatedVideos(id).then(data => {
      const videos = data.data.map(item => {
        item.id = item.vid
        item.name = item.title
        if (!item.cover) {
          item.cover = item.coverUrl
        }

        if (!item.playCount) {
          item.playCount = item.playTime
        }
        return item
      });
      dispatch(changeRelatedVidoes(videos));
    }).catch((e) => {
      console.log('获取mv相关视频数据失败', e);
    })
  }
};
