import { useSetRecoilState } from 'recoil';
import { IToDo, toDoState } from '../atoms';

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (newCategory: IToDo["category"]) => {
        console.log(newCategory)
    }
    return (
        <li>
            {text}
            {category !== "TODO" && <button onClick={() => onClick("TODO")}>To Do</button>}
            {category !== "DOING" && <button onClick={() => onClick("DOING")}>Doing</button>}
            {category !== "DONE" && <button onClick={() => onClick("DONE")}>Done</button>}
        </li>
    )
}

export default ToDo;