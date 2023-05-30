import React from 'react';
import './headder.css';

const Headder = () => {
  return (
    <div className='headder'>
        <div className="headderTitles">
            <div className="headderTitle">
                <span className='headderTitleSm'>React & Node</span>
                <span className='headderTitleLg'>Blog</span>
            </div>
            <img src="https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=600"
             alt="" className="headderImg" />
        </div>
    </div>
  )
}

export default Headder;