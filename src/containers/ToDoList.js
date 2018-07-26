import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};
class ToDoList extends React.Component {
    render() {
        return (
            <Fragment>
                {this.props.todos.map(todo => (
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                    />
                ))}
            </Fragment>
        );
    }
}

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(mapStateToProps)(ToDoList);
