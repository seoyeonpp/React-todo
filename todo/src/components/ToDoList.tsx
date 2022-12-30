import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';


interface IForm {
    toDo: string;
}
interface IToDo {
    text: string;
    id: number;
    category: "TODO" | "DOING" | "DONE";
}
const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
})

function ToDoList() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    // const value = useRecoilValue(toDoState);
    // const modFn = useSetRecoilState(toDoState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const onSubmit = ({ toDo }: IForm) => {
        setToDos((oldToDos) => [{ text: toDo, id: Date.now(), category: "TODO" }, ...oldToDos]);
        setValue("toDo", "");
    }
    return (
        <div>
            <h1>투두리스트</h1>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("toDo", {
                        required: "todo를 입력하세요",
                    })}
                    placeholder='할일을 적으세요' />
                <button>추가! </button>
            </form>
            <ul>
                {toDos.map(toDo => <li key={toDo.id}>{toDo.text}</li>)}
            </ul>
        </div>
    )
}
export default ToDoList;

// ***** react-hook-form 을 안쓴다면 이렇게 해야함 *****
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


// ***** react hook form 으로 회원가입 연습 *****
// interface IFormData {
//     errors: {
//         email: {
//             message: string;
//         };
//     };
//     userName: string;
//     email: string;
//     password?: string;
//     password1?: string;
//     extraError?: string;
// }
// function ToDoList() {
//     const { register, watch, handleSubmit, formState: { errors }, setError } = useForm<IFormData>({
//         defaultValues: {
//             email: '@naver.com',
//         }
//     });
//     const onValid = (data: IFormData) => {
//         if (data.password !== data.password1) {
//             setError("password1", { message: "비밀번호가 같지 않습니다. " }, { shouldFocus: true })
//         }
//         setError("extraError", { message: "서버 에러" })
//     }
//     console.log(errors)
//     return <div>
//         <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onValid)}>
//             <input {...register("email", {
//                 required: '이메일은 필수항목입니다.',
//                 minLength: {
//                     value: 5,
//                     message: '이메일이 너무 짧습니다. '
//                 },
//                 pattern: {
//                     value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//                     message: '네이버 이메일만 가능합니다. '
//                 },

//             })} placeholder='Email' />
//             <span>
//                 {errors?.email?.message}
//             </span>
//             <input {...register("userName",
//                 {
//                     required: "이름은 필수",
//                     validate: {
//                         noSY: (value) => value.includes("서연") ? "'서연'은 유저네임이 될 수 없습니다. " : true,
//                         noNick: (value) => value.includes("nick") ? "'nick'은 유저네임이 될 수 없습니다. " : true,
//                     }
//                 }
//             )} placeholder='userName' />
//             <span>
//                 {errors?.userName?.message}
//             </span>
//             <input {...register("password")} placeholder='password' />
//             <input {...register("password1")} placeholder='password' />
//             <span>
//                 {errors?.password1?.message}
//             </span>
//             <button>추가! </button>
//             <span>{errors?.extraError?.message}</span>
//         </form>
//     </div>
// }
