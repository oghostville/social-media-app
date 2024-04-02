import React, { useState } from 'react';
import Comment from './Comment';

function Post({ title, content }) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]); 
  const [commentInput, setCommentInput] = useState(''); 

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleCommentSubmit(e) {
    e.preventDefault();
    if (!commentInput.trim()) return; 
    setComments([...comments, commentInput]);
    setCommentInput(''); 
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <div>
        <span>Likes: {likes}</span>
        <button onClick={handleLike}>Like</button>
      </div>
      {/* Comments form */}
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          placeholder="Add a comment..."
        />
        <button type="submit">Submit</button>
      </form>
      {/* Comments display */}
      {comments.map((comment, index) => (
        <Comment key={index} content={comment} />
      ))}
    </div>
  );
}

export default Post;
