import React, { useState } from 'react';
import './topbar.css';
import '../../App.css';
import Profile from '../images/suneel2.jpg';
import { NavLink } from 'react-router-dom';

const Topbar = () => {
  const user = false;

  const [bars,setBars] = useState(false);

  return (
    <>
    <div className={bars ? 'top-m' : 'top'}>
        <div className="topLeft">
        <i className="fa-brands fa-slack"></i>
        <h2 className='logo'>my<span>BLOG</span></h2>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <NavLink className='link' to='/'>HOME</NavLink>
                </li>
                <li className="topListItem">
                  <NavLink className='link' to='/about'>ABOUT</NavLink>
                </li>
                <li className="topListItem">
                  <NavLink className='link' to='/contact'>CONTACT</NavLink>
                </li>
                <li className="topListItem">
                  <NavLink className='link' to='/write'>WRITE</NavLink>
                </li>
                <li className="topListItem">{user && 'LOGOUT'}</li> 
            </ul>
        </div>
        <div className="topRight">
            <i className="fa-solid fa-magnifying-glass"></i>
            {
              user ? (
                <img src={Profile} alt="" className="topImg" width={30} />
              ) : (<>
                <NavLink className='link' to='/login'>LOGIN</NavLink> /
                <NavLink className='link' to='/register'> REGISTER</NavLink>
              </>)
            }
        </div>
    </div>
        {
          bars ? <i className="fa-solid fa-close" onClick={()=>setBars(false)}></i>
               : <i className="fa-solid fa-bars" onClick={()=>setBars(true)}></i>
        }
    </>
  )
}

export default Topbar;