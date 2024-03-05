import React from "react";

class TodoItems extends React.Component {
    constructor(props: any) {
        super(props);
        this.createTask = this.createTask.bind(this);
    }

    createTask(item: any){
        return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
    }

    delete(key: any){
        this.props.delete(key);
    }

  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTask);
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default TodoItems;