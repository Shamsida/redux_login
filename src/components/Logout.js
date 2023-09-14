import React from 'react';
import "./Logout.css";
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

function Logout() {
    const dispatch = useDispatch();
    //const user = useSelector((state) => state.users)
    const user = useSelector(selectUser)

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }
  return (
    <div className='logout'>
      <h1>
        Welcome <span className='user_name'>{user.name}</span>
      </h1>
      <button className='logout_button' onClick={(e) => handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Logout
