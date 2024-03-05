/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import TodoItems from "./TodoItem";
import { Item } from "./Entity/TaskEntity";

export default function TodoList() {
    const [items, setItems] = useState<Item[]>([]);

    function addItem(e: any){
        e.preventDefault();
        if(e.target["txtTask"].value !== ""){
            const newItem = {
                text: e.target["txtTask"].value,
                key: new Date()
            }

            setItems([...items, newItem])

            e.target["txtTask"].value = "";
        }
    }

    function deleteItem(key: Date){
        const filteredItems = items.filter(function(item){
            return (item.key !== key)
        })

        setItems(filteredItems)
    }

    return (
        <div className="todoListMain">
            <div className="header">
                <form onSubmit={addItem}>
                    <input id="txtTask" placeholder="Ingresar la tarea" />
                    <button type="submit">Agregar</button>
                </form>
            </div>
            <TodoItems items={items} deleteItem={deleteItem} />
        </div>
    );
}
