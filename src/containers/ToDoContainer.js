import React, {Component} from 'react';
import ToDoList from './ToDoList';
import AddTodo from './AddTodo';

class ToDoContainer extends Component {

    render() {
        return (
            <div className="todo-container">
                <AddTodo />
                <ToDoList />
            </div>
        );
    }
}

export default ToDoContainer;
