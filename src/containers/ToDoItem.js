import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoItemComponent from '../components/TodoItem';
import { removeTodo, completeTodo } from '../actions';

const mapDispatchToProps = dispatch => {
    return {
        removeTodo: id => {
            dispatch(removeTodo(id));
        },
        completeTodo: id => {
            dispatch(completeTodo(id));
        }
    };
};
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

export default connect(null, mapDispatchToProps)(TodoItem);
