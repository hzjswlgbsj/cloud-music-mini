import React from 'react';
import { 
  ListWrapper,
  ListItem,
  List
} from './style';
import { getCount } from "../../api/utils";
import LazyLoad from "react-lazyload";
import { useNavigate } from 'react-router-dom';

function RecommendList(props) {
  const navigate = useNavigate();
  return (
    <ListWrapper>
      <h1 className="title"> 推荐视频 </h1>
      <List>
        {
          props.recommendList.map((item, index) => {
            return (
              <ListItem key={item.id + index} onClick={() => navigate(`/videos/${item.id}`)}>
                <div className="img_wrapper">
                  <div className="decorate"></div>
                  {/* 加此参数可以减小请求的图片资源大小 */}
                  <LazyLoad placeholder={<img width="100%" height="100%" src={require("./music.png").default} alt="music"/>}>
                    <img src={item.cover + "?param=300x300"} width="100%" height="100%" alt="music"/>
                  </LazyLoad>
                  <div className="play_count">
                    <i className="iconfont play">&#xe644;</i>
                    <span className="count">{getCount(item.playCount)}</span>
                  </div>
                </div>
                <div className="desc">{item.name}</div>
              </ListItem>
            )
          })
        }
      </List>
    </ListWrapper>
  );
}
export default React.memo(RecommendList);