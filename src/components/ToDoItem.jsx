import React, { useState } from "react";
import "../App.css";

export const ToDoItem = ({ fromText, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);

  const clickCkeckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="just-div">
      <input type="checkbox" onChange={clickCkeckbox} />
      <p
        className={
          isChecked ? "text-decoration-line-through" : "text-decoration-none"
        }
      >
        {fromText}
      </p>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};
