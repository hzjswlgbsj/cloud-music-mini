// 根组件
import React from 'react';
import { Provider } from 'react-redux'
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import store from './store/index'

function App () {
  return (
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;