import React from 'react'
import "./login.css"
import { logout, selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux';
const Logout = () => {

const user=useSelector(selectUser)


  const dispatch=useDispatch()
const hendleLogout= (e) => {

  e.preventDefault();

  dispatch(logout());

}


  return (
    <div>

<h1>welcome : 
    <span>{user.name}</span>
    <button  onClick={(e) => hendleLogout(e)}>
      Logout</button>
</h1>

    </div>
  )
}

export {Logout}