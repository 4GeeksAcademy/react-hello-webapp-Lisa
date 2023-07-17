import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Todo(props) {
  const { todo, removeTodo, index } = props;
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div
      id="input"
      className="d-flex flex-row d-grid gap-2"
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
      
    >
        <div >
          <p  style={{ marginBottom: "0px" }}>{todo}</p>
        </div>
    

      {showDelete && (
        <p id="deleteIcon" onClick={() => removeTodo(index)}>
x
         
        </p>
      )} 
    </div>
  );
}