import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState } from '../atoms';

interface IForm {
    toDo: string;
}

function CreateToDo() {
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const category = useRecoilValue(categoryState);
    const setToDos = useSetRecoilState(toDoState);
    const onSubmit = ({ toDo }: IForm) => {
        setToDos((oldToDos) => [{ text: toDo, id: Date.now(), category }, ...oldToDos]);
        setValue("toDo", "");
    }
    return <form onSubmit={handleSubmit(onSubmit)}>
        <input
            {...register("toDo", {
                required: "todo를 입력하세요",
            })}
            placeholder='할일을 적으세요' />
        <button>추가! </button>
    </form>
}

export default CreateToDo;