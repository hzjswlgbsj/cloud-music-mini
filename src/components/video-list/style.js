import styled from'styled-components';
import style from '../../assets/global-style';

export const ListWrapper = styled.div`
  max-width: 100%;
  .title {
    font-weight: 700;
    padding-left: 6px;
    font-size: 14px;
    line-height: 60px;
  }
`;
export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ListItem = styled.div`
  position: relative;
  width: 46%;
  padding: 10px 6px;
  .img_wrapper {
    .decorate {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient (hsla (0,0%,43%,.4),hsla (0,0%,100%,0));
    }
    position: relative;
    height: 0;
    padding-bottom: 60%;
    .play_count {
      position: absolute;
      right: 2px;
      top: 2px;
      font-size: ${style["font-size-s"]};
      line-height: 15px;
      color: ${style["font-color-light"]};
      .play {
        vertical-align: top;
      }
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }
  .desc {
    margin: 2px 0;
    padding: 0 2px;
    text-align: left;
    font-size: ${style["font-size-m"]};
    line-height: 1.4;
    color: ${style["font-color-desc"]};
    ${style.noWrap()}
  }
  .artistName {
    font-size: ${style["font-size-m"]};
    color: ${style["font-color-desc-v2"]};
  }
`;