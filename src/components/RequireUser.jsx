import React from 'react'
import { KEY_ACCESS_TOKEN,getItem } from '../Utils/LocalStorage';
import { Outlet } from 'react-router-dom';
import Login from './Login/Login';

function RequireUser() {
    const user=getItem(KEY_ACCESS_TOKEN);
  return (
    <div>
      {user?<Outlet/>:<Login/>}
    </div>
  )
}

export default RequireUser
