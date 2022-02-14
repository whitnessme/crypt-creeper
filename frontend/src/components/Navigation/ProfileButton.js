import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';
import UsersPage from '../UsersPage'


function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showMenu, setShowMenu] = useState(false);
    
    const openMenu = () => {
      if (showMenu) return;
      setShowMenu(true);
    };
    
    useEffect(() => {
      if (!showMenu) return;
  
      const closeMenu = () => {
        setShowMenu(false);
      };
  
      document.addEventListener('click', closeMenu);
    
      return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);
  
    const logout = (e) => {
      e.preventDefault();
      dispatch(sessionActions.logout());
    };

  
    return (
        <>
        <button onClick={openMenu}>
          {showMenu ?
          <i className="fa-solid fa-rectangle-xmark"></i>
          :  
          <i className="fas fa-user-circle" />
          }
        </button>
        {showMenu && (
          <ul className="profile-dropdown">
            <li>Welcome {user.firstName}!</li>
            <li>{user.username}</li>
            <li>
              <a className="github" href="https://github.com/whitnessme/crypt-seeker" target='_blank'>
              <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
          </ul>
        )}
      </>
    );
  }

export default ProfileButton;