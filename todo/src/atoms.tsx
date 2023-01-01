import { atom, selector } from 'recoil';

// 단순히 복붙을 안하게 함
// type categories = "TODO" | "DOING" | "DONE"

export enum Categories {
    // "TODO", // value가 숫자로 나옴
    // "DOING",
    // "DONE",
    "TODO" = "TODO", // value가 문자로 나옴
    "DOING" = "DOING",
    "DONE" = "DONE",
}

export interface IToDo {
    text: string;
    id: number;
    category: Categories;
}

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TODO,
})

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category)
    }
})