import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IToDo, toDoState } from '../atoms';

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            const oldTodo = oldToDos[targetIndex];
            const newToDo = { text, id, category: name as any }; // as any 는 타입스크립트가 체크하지 않음 (권장하지 않음)
            return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)]
        })
    }
    return (
        <li>
            {text}
            {category !== "TODO" && <button name='TODO' onClick={onClick}>To Do</button>}
            {category !== "DOING" && <button name='DOING' onClick={onClick}>Doing</button>}
            {category !== "DONE" && <button name='DONE' onClick={onClick}>Done</button>}
        </li>
    )
}

export default ToDo;