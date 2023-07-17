import React, { createContext, useState } from 'react';

 const Context = createContext();

export default function ContextProvider(props) {

    const [todoList, setTodoList] = useState([]);

    return (
        <Context.Provider value={{ todoList, setTodoList }}>
            {props.children}
        </Context.Provider>
    )
}
export { Context };
