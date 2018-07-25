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

ToDoList.propTypes = {
    removeTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ToDoList;
