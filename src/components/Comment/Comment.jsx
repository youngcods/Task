import React from "react";
import './Comment.css'

const Comment = ({ author, text }) => (
  <div className="commentBlock">
    <span>
      {author}: {text}
    </span>
  </div>
);

export default Comment;
