import React from 'react';
import './write.css';

const Write = () => {
  return (
    <div className='write'>
        <img src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600"
         alt="" className="writeImg" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-folder-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:'none'}} />
                <input className='writeInput' type="text" placeholder='Title...' autoFocus='true' />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your Story.." type="text"
                 className='writeInput writeText'></textarea>
            </div>
            <button type='submit' className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}

export default Write;