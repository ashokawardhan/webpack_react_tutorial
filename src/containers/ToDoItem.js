import React, {Component} from 'react';
import TodoItemComponent from '../components/TodoItem';

class TodoItem extends Component {
    removeTodo = () => {
        this.props.removeTodo(this.props.todo.id);
    };

    completeTodo = () => {
        this.props.completeTodo(this.props.todo.id);
    };

    render() {
        return (
            <TodoItemComponent
                removeTodo={this.removeTodo}
                completeTodo={this.completeTodo}
                todo={this.props.todo}
            />
        );
    }
}

TodoItem.propTypes = {
    removeTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
};

export default TodoItem;
