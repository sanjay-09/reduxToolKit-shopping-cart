import React from 'react'
import { KEY_ACCESS_TOKEN,getItem } from '../Utils/LocalStorage';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function IfNotLoggedIn() {
    const user=getItem(KEY_ACCESS_TOKEN);
  return (
    <div>
     {user?<Navigate to="/"/>:<Outlet/>}
    </div>
  )
}

export default IfNotLoggedIn
