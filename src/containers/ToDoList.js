import React, {Fragment} from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({todos, removeTodo, completeTodo}) => (
    <Fragment>
        {todos.map(todo => (
            <ToDoItem
                key={todo.id}
                removeTodo={removeTodo}
                todo={todo}
                completeTodo={completeTodo}
            />
        ))}
    </Fragment>
);

export default ToDoList;
