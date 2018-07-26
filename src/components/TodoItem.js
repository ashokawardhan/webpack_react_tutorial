import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({todo, removeTodo, completeTodo}) => {
    return (
        <div className="todo-item">
            <div
                className={
                    todo.completed ? 'complete todo-item-text' : 'todo-item-text'
                }
            >
                {todo.text}
            </div>
            <div className="todo-item-buttons">
                <button onClick={completeTodo}>
                    {todo.completed ? 'Redo todo' : 'Complete todo'}
                </button>
                <button onClick={removeTodo}>Delete todo</button>
            </div>
        </div>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    removeTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
};

export default TodoItem;
