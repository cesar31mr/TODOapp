/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import TodoItems from "./TodoItem";
import { Item } from "./Entity/TaskEntity";

export default function TodoList() {
    const [items, setItems] = useState<Item[]>([]);
    const [myTask, setMyTask] = useState("");

    function addItem(e: any) {
        e.preventDefault();
        if (myTask !== "") {
            const newItem = {
                text: myTask,
                key: new Date(),
            };

            setItems([...items, newItem]);

            setMyTask("");
        }
    }

    function deleteItem(key: Date) {
        const filteredItems = items.filter(function (item) {
            return item.key !== key;
        });

        setItems(filteredItems);
    }

    return (
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div className="mb-4">
                <form onSubmit={addItem}>
                    <h1 className="text-grey-darkest">Todo List</h1>
                    <div className="flex mt-4">
                        <input
                            id="txtTask"
                            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                            onChange={(e) => setMyTask(e.target.value)}
                            value={myTask}
                            placeholder="Ingresar la tarea"
                        />
                        <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" type="submit">Agregar</button>
                    </div>
                </form>
            </div>
            <TodoItems items={items} deleteItem={deleteItem} />
        </div>
    );
}
