import React, { useState } from 'react';

function ToDoList() {
    const [todo, setTodo] = useState("")
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { currentTarget: { value } } = event;
        setTodo(value);
    }
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(todo);
        setTodo("");
    }
    return <div>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value={todo} placeholder='할일을 적으세요' />
            <button>추가! </button>
        </form>
    </div>
}

export default ToDoList;