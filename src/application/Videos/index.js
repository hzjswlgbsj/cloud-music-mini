import React, { useEffect } from 'react';
import Slider from '../../components/slider/';
import { connect } from "react-redux";
import * as actionTypes from './store/actionCreators';
import VideoList from '../../components/video-list';
import Scroll from '../../baseUI/scroll/index';
import { Content } from './style';
import { forceCheck } from 'react-lazyload';
import Loading from '../../baseUI/loading/index';
import { Outlet } from "react-router";
import { useNavigate } from 'react-router-dom';

function Videos(props){
  const { bannerList, recommendList, enterLoading } = props;
  const { getBannerDataDispatch, getRecommendListDataDispatch } = props;
  const navigate = useNavigate();

  useEffect(() => {
    // 如果页面有数据，则不发请求
    //immutable 数据结构中长度属性 size
    if (!bannerList || !bannerList.size){
      getBannerDataDispatch();
    }
    if (!recommendList || !recommendList.size){
      getRecommendListDataDispatch();
    }
    //eslint-disable-next-line
  }, []);

  const bannerListJS = bannerList ? bannerList.toJS () : [];
  const recommendListJS = recommendList ? recommendList.toJS() : [];
  
  bannerListJS.forEach((item) => {
    item.imageUrl = item.picUrl
  })

  return (
    <Content>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          {
            bannerListJS.length > 0 &&
            <Slider
              bannerList={bannerListJS}
              handleClick={(id) => navigate(`/videos/${id}`)}
            />
          }
          <VideoList list={recommendListJS}></VideoList>
        </div>
      </Scroll>
      {enterLoading ? <Loading></Loading> : null}
      <Outlet />
    </Content> 
  );
}

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state) => ({
  // 不要在这里将数据 toJS
  // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
  bannerList: state.getIn(['videos', 'bannerList']),
  recommendList: state.getIn(['videos', 'recommendList']),
  enterLoading: state.getIn (['videos', 'enterLoading'])
});
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList());
    },
  }
};

// 将 ui 组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Videos));