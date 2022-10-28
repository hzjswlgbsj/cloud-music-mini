import React from 'react';
import { Outlet } from "react-router";
import { Top, Tab, TabItem } from './style';
import { NavLink } from 'react-router-dom';// 利用 NavLink 组件进行路由跳转

function Home(props) {
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" className={({ isActive }) => isActive ? 'red' : 'blue'}><TabItem><span > 推荐 </span></TabItem></NavLink>
        <NavLink to="/singers" className={({ isActive }) => isActive ? 'red' : 'blue'}><TabItem><span > 歌手 </span></TabItem></NavLink>
        <NavLink to="/rank" className={({ isActive }) => isActive ? 'red' : 'blue'}><TabItem><span > 排行榜 </span></TabItem></NavLink>
      </Tab>
      <Outlet />
    </div>
  )
}

export default React.memo(Home)