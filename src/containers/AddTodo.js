import React, {Component} from 'react';
import AddTodoComponent from '../components/AddTodo';

class AddTodo extends Component {
    addTodo = ({key, target: {value}}) => {
        if (key === 'Enter') {
            this.props.addTodo(value);
        }
    };
    render() {
        return <AddTodoComponent addTodo={this.addTodo} />;
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default AddTodo;
