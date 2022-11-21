import styled from'styled-components';
import style from '../../assets/global-style';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: ${props => props.play > 0 ? "60px": 0};
  width: 100%;
  z-index: 100;
  overflow: hidden;
  background: #f2f3f4;
  transform-origin: right bottom;
  &.fly-enter, &.fly-appear {
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
  &.fly-enter-active, &.fly-appear-active {
    transition: transform .3s;
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit {
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit-active {
    transition: transform .3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`
export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  margin-top: 40px;
  >video {
    width: 100%;
    height: 200px;
  }
`
export const VideoListWrapper = styled.div`
  z-index: 50;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: calc(100% - 240px);
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
`