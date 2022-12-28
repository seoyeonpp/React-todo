import React, { useState } from 'react';
import { useForm } from "react-hook-form";

// function ToDoList() {
//     const [todo, setTodo] = useState("");
//     const [toDoError, setToDoError] = useState("");
//     const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//         const { currentTarget: { value } } = event;
//         setTodo(value);
//         setToDoError('');
//     }
//     const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if (todo.length < 10) {
//             return setToDoError('Todo는 10글자보다 길어야 합니다.')
//         }
//         console.log(todo);

//         setTodo("");
//     }
//     return <div>
//         <form onSubmit={onSubmit}>
//             <input onChange={onChange} value={todo} placeholder='할일을 적으세요' />
//             <button>추가! </button>
//             {toDoError !== "" ? toDoError : null}
//         </form>
//     </div>
// }

// react hook form 으로 간단하게 작성하기
function ToDoList() {
    const { register, watch } = useForm();
    console.log(watch())
    return <div>
        <form>
            <input {...register("Email")} placeholder='Email' />
            <input {...register("userName")} placeholder='Email' />
            <input {...register("passWord")} placeholder='Email' />
            <button>추가! </button>
        </form>
    </div>
}

export default ToDoList;