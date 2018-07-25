import React, {Component, Fragment} from 'react';
import uuidv1 from 'uuid/v1';
import ToDoList from './ToDoList';
import AddTodo from './AddTodo';

class ToDoContainer extends Component {
    state = {
        todos: [
            {
                text: 'abc',
                id: 123
            }
        ]
    };

    addTodo = todo => {
        this.setState(prevState => {
            return {
                todos: prevState.todos.concat({
                    text: todo,
                    completed: false,
                    id: uuidv1()
                })
            };
        });
    };

    removeTodo = id => {
        this.setState(prevState => {
            return {
                todos: prevState.todos.filter(todo => todo.id !== id)
            };
        });
    };

    completeTodo = id => {
        this.setState(prevState => {
            return {
                todos: prevState.todos.map(todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            };
        });
    };

    render() {
        return (
            <Fragment>
                <div className="todo-container">
                    <AddTodo addTodo={this.addTodo} />
                    <ToDoList
                        todos={this.state.todos}
                        removeTodo={this.removeTodo}
                        completeTodo={this.completeTodo}
                    />
                </div>
            </Fragment>
        );
    }
}

export default ToDoContainer;
