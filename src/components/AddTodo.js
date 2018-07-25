import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({addTodo}) => (
    <div className="todo-add-container">
        <input
            type="text"
            className="add-input"
            placeholder="Add new todo..."
            onKeyDown={addTodo}
        />
    </div>
);

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default AddTodo;
