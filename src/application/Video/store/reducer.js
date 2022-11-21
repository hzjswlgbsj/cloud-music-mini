import * as actionTypes from './constants';
import { fromJS } from 'immutable';// 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构

const defaultState = fromJS({
  url: '',
  detail: {},
  relatedVideos: [],
  loading: true
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_URL:
      return state.set('url', action.data);
    case actionTypes.CHANGE_DETAIL:
      return state.set('detail', action.data);
    case actionTypes.CHANGE_RELATED_VIDEOS:
      return state.set('relatedVideos', action.data);
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set('loading', action.data);
    default:
      return state;
  }
}
