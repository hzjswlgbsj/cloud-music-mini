import React, { useState, useEffect, useRef, useCallback } from "react";
import { CSSTransition } from "react-transition-group";
import { Container } from "./style";
import { VideoWrapper, VideoListWrapper } from "./style";
import Header from "../../baseUI/header";
import VideoList from "../../components/video-list";
import { connect } from 'react-redux';
import Loading from "./../../baseUI/loading";
import { getVideoInfo, changeEnterLoading } from "./store/actionCreators";
import { changePlayingState } from '../Player/store/actionCreators';
import { useParams, useNavigate } from 'react-router-dom';
import style from "../../assets/global-style";

function Video(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showStatus, setShowStatus] = useState(true);

  const { 
    url, 
    detail: immutableDetail, 
    relatedVideos: immutableRelatedVideos, 
    loading,
  } = props;
  
  const { getVideoDetail, togglePlayingDispatch } = props;
  const detail = immutableDetail.toJS();
  const relatedVideos = immutableRelatedVideos.toJS();
  const header = useRef();
  const videoWrapper = useRef();
  const video = useRef();

  useEffect(() => {
    getVideoDetail(id);
    togglePlayingDispatch();
    const headerDOM = header.current;
    headerDOM.style.backgroundColor = style["theme-color"];
    const videoDOM = video.current;
    videoDOM.addEventListener(
      'WeixinJSBridgeReady',
      function () {
        video.play();
        video.pause();
        video.play();
      }, false); 
    // eslint-disable-next-line
  }, [id]);

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
          <video
            controls
            autoPlay
            ref={video}
            x5-playsinline="true"             //???????????????????????????
            playsInline={true}            //ios?????????????????????
            webkit-playsinline="true"         //ios10?????????????????????
            preload="auto"                    //?????????
            loop	                              //????????????
            poster={detail.cover}       //?????????????????????
          >
            <source src={url} />
            ????????????????????????video??????
          </video>
        </VideoWrapper>
        <VideoListWrapper>
          <VideoList list={relatedVideos}></VideoList>
        </VideoListWrapper>
        { loading ? (<Loading></Loading>) : null}
      </Container>
    </CSSTransition>
  )
}

// ??????Redux?????????state????????????props???
const mapStateToProps = state => ({
  url: state.getIn(["video", "url"]),
  detail: state.getIn(["video", "detail"]),
  relatedVideos: state.getIn(["video", "relatedVideos"]),
  loading: state.getIn(["video", "loading"]),
});
// ??????dispatch???props???
const mapDispatchToProps = dispatch => {
  return {
    getVideoDetail(id) {
      dispatch(changeEnterLoading(true));
      dispatch(getVideoInfo(id));
    },
    togglePlayingDispatch() {
      dispatch(changePlayingState(false));
    },
  };
};

// ???ui???????????????????????????
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Video));