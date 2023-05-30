import React from 'react';
import './settings.css';
import Sidebar from '../sidebar/Sidebar';

const Settings = () => {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                     Log out</span>
            </div>
            <form className="settingsForm">
                <label>Profile picture :</label>
                <div className="settingsPP">
                     <label htmlFor="fileInput">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.BUlRqjMQARLr9WJJMi0XwQHaIr&pid=Api&P=0&h=180"
                        className="PP" />
                     </label>
                </div>
                <input type="file" id='fileInput' style={{display:'none'}} />
                <label>Username :</label>
                <input type="text" placeholder='Suneel' />
                <label>Email :</label>
                <input type="email" placeholder='suneel@gmail.com' />
                <label>Password :</label>
                <input type="password" />
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings;