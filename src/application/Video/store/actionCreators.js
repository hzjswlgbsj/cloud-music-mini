import { getVideoDetail, getAllMv, getVideoUrl } from "../../../api/request";

import { fromJS } from 'immutable';
import {
  CHANGE_URL,
  CHANGE_DETAIL,
  CHANGE_RELATED_VIDEOS,
  CHANGE_ENTER_LOADING,
} from './constants';

const changeUrl = (data) => ({
  type: CHANGE_URL,
  data: fromJS(data)
});
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


// 加载视频信息
export const getVideoInfo = (id) => {
  return (dispatch) => {
    getVideoUrl(id).then(data => {
      dispatch(changeUrl(data.data.url));
      dispatch(changeEnterLoading(false));
    }).catch((e) => {
      console.log('获取mv播放地址失败', e);
    })
    getVideoDetail(id).then(data => {
      dispatch(changeDetail(data.data));
      dispatch(changeEnterLoading(false));
    }).catch((e) => {
      console.log('获取mv详情数据失败', e);
    })
    getAllMv(id).then(data => {
      dispatch(changeRelatedVidoes(data.data));
    }).catch((e) => {
      console.log('获取mv相关视频数据失败', e);
    })
  }
};
