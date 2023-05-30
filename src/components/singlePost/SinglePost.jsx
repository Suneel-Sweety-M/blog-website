import React from 'react';
import './singlePost.css';

const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600"
             alt="" className="singlePostImg" />
        </div>
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit.
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAutor'>Author : <b>Suneel</b></span>
            <span className='singlePostDate'><b>1 hour ago</b></span>
        </div>
        <p className='singlePostDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
         ipsam doloremque excepturi aliquam repellendus, laborum eveniet! Laudantium
         dolorem similique cupiditate ab quia ducimus ut voluptatem, magni obcaecati 
         velit iusto rerum commodi molestias enim sint quo, ratione, est quae veritatis!
         Aperiam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
         ipsam doloremque excepturi aliquam repellendus, laborum eveniet! Laudantium
         dolorem similique cupiditate ab quia ducimus ut voluptatem, magni obcaecati 
         velit iusto rerum commodi molestias enim sint quo, ratione, est quae veritatis!
         Aperiam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
         ipsam doloremque excepturi aliquam repellendus, laborum eveniet! Laudantium
         dolorem similique cupiditate ab quia ducimus ut voluptatem, magni obcaecati 
         velit iusto rerum commodi molestias enim sint quo, ratione, est quae veritatis!
         Aperiam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
         ipsam doloremque excepturi aliquam repellendus, laborum eveniet! Laudantium
         dolorem similique cupiditate ab quia ducimus ut voluptatem, magni obcaecati 
         velit iusto rerum commodi molestias enim sint quo, ratione, est quae veritatis!
         Aperiam.</p>
    </div>
  )
}

export default SinglePost;