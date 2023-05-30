import React from 'react';
import './post.css';
import { NavLink } from 'react-router-dom';

const Post = () => {
  return (
    <div className='post'>
        <img src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <div className="postTitle">
                <NavLink className='link' to='/post/id'>Lorem ipsum dolor sit amet.</NavLink>
            </div><hr />
            <div className="postDate">1 hour ago</div>
        </div>
        <p className='postDesc'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo 
            inventore cumque ex est officia eaque esse consectetur nesciunt 
            quod aliquam iste incidunt quo nulla aliquid nobis molestiae maxime, 
            velit vitae.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo 
            inventore cumque ex est officia eaque esse consectetur nesciunt 
            quod aliquam iste incidunt quo nulla aliquid nobis molestiae maxime, 
            velit vitae.
        </p>
    </div>
  )
}

export default Post;