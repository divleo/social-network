import React from 'react';

import postImg from '../assets/logo.svg';

import './Post.css';

function Post({ message, likesCount }) {
  return (
    <div className="post">
      <img className="post__img" src={postImg} alt="post" />
      {message}
      <div>
        <span className="post__like">like</span> {likesCount}
      </div>
    </div>
  );
}

export default Post;
