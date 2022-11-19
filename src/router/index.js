// 路由配置
import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';
import Album from '../application/Album';
import Singer from '../application/Singer';
import Search from '../application/Search';
import Videos from '../application/Videos';
import Video from '../application/Video';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      // 默认跳转到推荐
      {
        index: true,
        element: <Recommend />
      },
      {
        path: 'recommend',
        element: <Recommend />,
        children: [
          {
            path: "/recommend/:id",
            element: <Album />
          }
        ]
      },
      {
        path: "singers",
        element: <Singers />,
        children: [
          {
            path: "/singers/:id",
            element: <Singer />
          }
        ]
      },
      {
        path: "rank",
        element: <Rank />,
        children: [
          {
            path: "/rank/:id",
            element: <Album />
          }
        ]
      },
      {
        path: "videos",
        element: <Videos />,
        children: [
          {
            path: "/videos/:id",
            element: <Video />
          }
        ]
      },
      {
        path: "/search",
        exact: true,
        key: "search",
        element: <Search />,
      },
      {
        path: "/album/:id",
        exact: true,
        key: "album",
        element: <Album />
      }
    ]
  }
])

export default router