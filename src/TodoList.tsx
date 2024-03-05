/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from "react";

class TodoList extends Component {
    constructor(props: any) {
        super(props);
        this.state = {items: []}
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this)
    }

    addItem(e: any){
        if(this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            }

            this.setState((prevState: any) => {
                return {
                    items: prevState.items.concat(newItem)
                }
            })

            this._inputElement.value = "";
            e.preventDefault();

        }
    }

    deleteItem(key: any){
        const filteredItems = this.state.items.filter(function(item: any){
            return (item.key !== key)
        })

        this.setState({
            items: filteredItems
        })
    }

    render(){
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder="Ingresar la tarea" />
                        <button type="submit">Agregar</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList;