import React from 'react';
import Class from './Nav.module.css';
import {NavLink} from 'react-router-dom';

function Nav() {
    return ( 
      <div className={Class.nav}>
        <div className={Class.item}>
            <NavLink activeClassName={Class.active} to="/profile">Profile</NavLink>
        </div>
        <div className={`${Class.item} ${Class.active}`}>
            <NavLink activeClassName={Class.active} to="/dialogs">Messages</NavLink> 
        </div>
        <div className={Class.item}>
            <a> News</a>
        </div>
        <div className={Class.item}>
            <a>Music</a>
        </div>
        <div className={Class.item} >
            <a>Settings</a>
        </div>
      </div>
    )
}

export default Nav