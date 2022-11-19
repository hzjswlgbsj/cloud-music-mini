import React from 'react';
import { Outlet } from "react-router";
import { Top, Tab, TabItem } from './style';
import { NavLink, useNavigate } from 'react-router-dom';// 利用 NavLink 组件进行路由跳转
import Player from '../Player';


function Home(props) {
  const navigate = useNavigate()
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">云音乐</span>
        <span className="iconfont search" onClick={() => navigate('/search')}>&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to="/recommend"><TabItem><span> 推荐 </span></TabItem></NavLink>
        <NavLink to="/singers"><TabItem><span> 歌手 </span></TabItem></NavLink>
        <NavLink to="/rank"><TabItem><span> 排行榜 </span></TabItem></NavLink>
        <NavLink to="/videos"><TabItem><span> 视频 </span></TabItem></NavLink>
      </Tab>
      <Outlet />
      <Player></Player>
    </div>
  )
}

export default React.memo(Home)