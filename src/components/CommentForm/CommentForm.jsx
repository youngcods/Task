import React, { useState } from 'react';
import './CommentFrom.css'

const CommentForm = ({ onCommentSubmit }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author || !text) {
      return;
    }
    onCommentSubmit({ author, text });
    setAuthor('');
    setText('');
  };

  return (
    <div className='formBlock'>
      <form onSubmit={handleSubmit} className='formBlock'>
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          placeholder="Leave a comment"
          cols={50}
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;