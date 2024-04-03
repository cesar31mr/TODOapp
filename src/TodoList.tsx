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
        <>
            <div className="text-center text-3xl font-semibold mb-4">
                <h1 className="text-grey-darkest font-bold">Todo List</h1>
            </div>

            <div className="md:w-1/2 mx-auto">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <form onSubmit={addItem}>
                        <div className="flex mb-4">
                            <input
                                id="todo-input"
                                className="w-full px-4 py-2 mr-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                                onChange={(e) => setMyTask(e.target.value)}
                                value={myTask}
                                placeholder="Ingresar la tarea"
                            />
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                type="submit"
                            >
                                Agregar
                            </button>
                        </div>
                    </form>
                    <TodoItems items={items} deleteItem={deleteItem} />
                </div>
            </div>
        </>
    );
}
