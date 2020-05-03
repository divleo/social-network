import React from 'react';

import './Posts.css';
import Post from './Post';

function Posts() {
  return (
    <div className="posts">
      <h2>Posts</h2>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message="text 1" likesCount="3" />
      <Post message="text 2" likesCount="4" />
    </div>
  );
}

export default Posts;
