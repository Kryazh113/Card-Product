import React from "react";
import Button from "/src/button/button";

function Comments({ comments, onShowMore, allCommentsLength }) {
  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <b>{comment.author}</b>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
      {allCommentsLength > comments.length && (
        <Button onClick={onShowMore}>Показать ещё</Button>
      )}
    </div>
  );
}

export default Comments;
