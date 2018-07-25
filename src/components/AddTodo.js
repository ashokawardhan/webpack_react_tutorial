import React from 'react';

const AddTodo = ({addTodo, value}) => (
    <div className="todo-add-container">
        <input
            type="text"
            className="add-input"
            placeholder="Add new todo..."
            onKeyDown={addTodo}
        />
    </div>
);

export default AddTodo;
