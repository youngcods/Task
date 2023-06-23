import React from "react";
import Comment from "../Comment/Comment";
import './CommentList.css'

const CommentList = ({ comments }) => (
  <div className="commentList">
    {comments.map((comment, index) => (
      <div className="commentListItem">
        <Comment key={index} author={comment.author} text={comment.text} />
      </div>
    ))}
  </div>
);

export default CommentList;
