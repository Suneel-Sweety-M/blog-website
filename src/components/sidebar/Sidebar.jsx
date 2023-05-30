import React from 'react';
import './sidebar.css';
import AboutImg from '../images/Suneel.jpg';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className='sidebarTitle'>ABOUT ME</span>
            <img src={AboutImg} alt="aboutumg" width={300} height={450} />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Veritatis commodi a sequi aperiam sint quisquam dolorum vitae quod ex quo.
            </p>
        </div>
        <div className="sidebarItem">
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className='sidebarTitle'>FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                <i className="sidebarIcon fa-brands fa-youtube"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-linkedin"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;