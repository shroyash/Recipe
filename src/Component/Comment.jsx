import React, { useState } from 'react';

function Comment() {
  const [commentText, setCommentText] = useState('');
  const [list, setList] = useState([]);

  const handleSetComment = (e) => {
    e.preventDefault();
    const newList = [...list, commentText];
    setList(newList);
    setCommentText('');
  };

  return (
    <div className="relative">
      <div className="comment-card bg-white shadow-lg rounded-md h-40 w-full overflow-auto p-2">
        <ul>
          {list.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
      </div>
      <form className="absolute bottom-0 right-0 flex items-end" onSubmit={handleSetComment}>
        <input
          type="text"
          placeholder="Write a comment"
          className="form-control mt-[150px]"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button type="submit" className="btn btn-danger">Send</button>
      </form>
    </div>
  );
}

export default Comment;
