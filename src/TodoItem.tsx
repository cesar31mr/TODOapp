import { Item, TaskEntity } from "./Entity/TaskEntity";

export default function TodoItems(props: TaskEntity) {
    const createTask = (item: Item) => {
        return <li onClick={() => props.deleteItem(item.key)} key={item.key.toString()}>{item.text}</li>
    }

    const todoEntries = props.items;
    const listItems = todoEntries.map(createTask);
    return (
        <ul>
            {listItems}
        </ul>
    );

}
