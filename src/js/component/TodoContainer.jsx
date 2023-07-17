import React, { useState, useContext } from "react";
import Todo from "./Todo.jsx";
import { Context } from "../context/Context.jsx";

export default function TodoContainer() {
  const [userInput, setUserInput] = useState("");
  const { todoList, setTodoList } = useContext(Context);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    console.log(value);
    setUserInput(event.target.value);
  };

 

  const removeTodo = (key) => {
    setTodoList(todoList.filter((list, index) => index !== key));

    return console.log(todoList);
  };

  // [...] spread operator , creat copy of the element

  const addTodoHandler = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      setTodoList([...todoList, userInput]);
      setUserInput("");
    }
  };

  return (
    <>
   
      <div className='container bg-light'>

            <div className='card  w-75 mb-3 ' style={{width:'18rem'}}>
            <div className="input-group mb-10 rounded-0 ">
            <input
          value={userInput}
          onChange={onChangeHandler}
          onKeyUp={addTodoHandler}
          required
          placeholder="What need to be done?"
        />
     
       </div>
          {/* {changeHandler(todoList)} */}
          <ul className='list-group list-group-flush'>
      {todoList.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
      ))}
      <p id="itemsLeft">{todoList.length} items left</p>
      </ul>
       </div>
       </div>
  

    </>
  );
}