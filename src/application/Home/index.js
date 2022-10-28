import React from 'react';
import { Outlet } from "react-router";

function Home(props) {
  const { route } = props
  return (
    <div>
      <div>Home</div>
      <Outlet />
    </div>
  )
}

export default React.memo(Home)