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
interface IFormData {
    errors: {
        email: {
            message: string;
        };
    };
    userName?: string;
    email: string;
    password?: string;
}
function ToDoList() {
    const { register, watch, handleSubmit, formState: { errors } } = useForm<IFormData>({
        defaultValues: {
            email: '@naver.com',
        }
    });
    const onValid = (data: IFormData) => {
        console.log(data)
    }
    console.log(errors)
    return <div>
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onValid)}>
            <input {...register("email", {
                required: '이메일은 필수항목입니다.',
                minLength: {
                    value: 5,
                    message: '이메일이 너무 짧습니다. '
                },
                pattern: {
                    value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                    message: '네이버 이메일만 가능합니다. '
                },

            })} placeholder='Email' />
            <span>
                {errors?.email?.message}
            </span>
            <input {...register("userName")} placeholder='userName' />
            <input {...register("password")} placeholder='password' />
            <button>추가! </button>
        </form>
    </div>
}

export default ToDoList;