import { Item, TaskEntity } from "./Entity/TaskEntity";

export default function TodoItems(props: TaskEntity) {
    const createTask = (item: Item) => {
        return <li className="text-slate-300 hover:text-slate-200" onClick={() => props.deleteItem(item.key)} key={item.key.toString()}>{item.text}</li>
    }

    const todoEntries = props.items;
    const listItems = todoEntries.map(createTask);
    return (
        <ul className="flex gap-x-2 text-lg font-bold">
            {listItems}
        </ul>
    );

}
