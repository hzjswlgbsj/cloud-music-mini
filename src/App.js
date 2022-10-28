// 根组件
import React from 'react';
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import router from './router';
import { RouterProvider } from 'react-router-dom';

function App () {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;