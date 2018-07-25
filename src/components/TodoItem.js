import React from 'react';

const TodoItem = ({todo, removeTodo, completeTodo}) => (
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

export default TodoItem;
