import React, { useState, useEffect, useRef, useCallback } from "react";
import { CSSTransition } from "react-transition-group";
import { Container } from "./style";
import { VideoWrapper, VideoListWrapper } from "./style";
import Header from "../../baseUI/header";
import Scroll from "../../baseUI/scroll";
import VideoList from "../../components/video-list";
import { connect } from 'react-redux';
import Loading from "./../../baseUI/loading";
import { getVideoInfo, changeEnterLoading } from "./store/actionCreators";
import { useParams, useNavigate } from 'react-router-dom';
import style from "../../assets/global-style";

function Video(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showStatus, setShowStatus] = useState(true);

  const { 
    detail: immutableDetail, 
    relatedVideos: immutableRelatedVideos, 
    loading,
  } = props;
  
  const { getVideoDetail } = props;
  const detail = immutableDetail.toJS();
  const relatedVideos = immutableRelatedVideos.toJS();
  const videoScrollWrapper = useRef();
  const videoScroll = useRef();
  const header = useRef();
  const videoWrapper = useRef();

  useEffect(() => {
    getVideoDetail(id);
    videoScroll.current.refresh();
    const headerDOM = header.current;
    headerDOM.style.backgroundColor = style["theme-color"];
    // eslint-disable-next-line
  }, []);

  const setShowStatusFalse = useCallback(() => {
    setShowStatus(false);
  }, []);

  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={() => navigate(`/videos`)}
    >
      <Container>
        <Header
          handleClick={setShowStatusFalse}
          title={detail.name}
          ref={header}
        />

        <VideoWrapper ref={videoWrapper}>
          <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls>
            当前浏览器不支持video标签
          </video>
        </VideoWrapper>
        <VideoListWrapper ref={videoScrollWrapper}>
          <Scroll ref={videoScroll} >
          <VideoList list={relatedVideos}></VideoList>
          </Scroll>
        </VideoListWrapper>
        { loading ? (<Loading></Loading>) : null}
      </Container>
    </CSSTransition>
  )
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = state => ({
  detail: state.getIn(["video", "detail"]),
  relatedVideos: state.getIn(["video", "relatedVideos"]),
  loading: state.getIn(["video", "loading"]),
});
// 映射dispatch到props上
const mapDispatchToProps = dispatch => {
  return {
    getVideoDetail(id) {
      dispatch(changeEnterLoading(true));
      dispatch(getVideoInfo(id));
    }
  };
};

// 将ui组件包装成容器组件
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Video));