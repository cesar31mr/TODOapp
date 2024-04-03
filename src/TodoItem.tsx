import { ChangeEvent } from "react";
import { Item, TaskEntity } from "./Entity/TaskEntity";

export default function TodoItems(props: TaskEntity) {

    const createTask = (item: Item) => {
        return (
            <li
                className="border-b border-gray-200 flex items-center justify-between py-4"
                key={item.key.toString()}
            >
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        className="mr-2"
                        onChange={(e) => checkEvent(e)}
                    />
                    <span>{item.text}</span>
                </label>
                <div>
                    <button
                        className="text-red-500 hover:text-red-700 mr-2 delete-btn"
                        onClick={() => props.deleteItem(item.key)}
                    >
                        Delete
                    </button>
                    <button
                        className="text-blue-500 hover:text-blue-700 edit-btn"
                        onClick={(e) => editTask(e)}
                    >
                        Edit
                    </button>
                </div>
            </li>
        );
    };

    const checkEvent = (e: ChangeEvent<HTMLInputElement>) => {
        const taskText = e.target.nextElementSibling;
        if (e.target.checked) {
            taskText!.classList.add("completed");
        } else {
            taskText!.classList.remove("completed");
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const editTask = (e: any) => {
        try {
            const taskText =
                e.currentTarget.parentElement!.parentElement!.querySelector(
                    "span"
                );
            const newText = prompt("Enter new task", taskText!.textContent!);
            if (newText !== null) {
                taskText!.textContent = newText.trim();
            }
        } catch (error) {
            console.error('editTask Error ===> ', error);
        }
    };

    const todoEntries = props.items;
    const listItems = todoEntries.map(createTask);
    return (
        <>
            <ul>{listItems}</ul>
        </>
    );
}
