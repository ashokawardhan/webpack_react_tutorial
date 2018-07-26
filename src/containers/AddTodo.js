import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AddTodoComponent from '../components/AddTodo';
import {addTodo} from '../actions';

const mapDispatchToProps = dispatch => {
    return {
        addTodo: text => {
            dispatch(addTodo(text));
        }
    };
};
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

export default connect(null, mapDispatchToProps)(AddTodo);
