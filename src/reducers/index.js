import uuidv1 from 'uuid/v1';
import {combineReducers} from 'redux';
import {ADD_TODO, REMOVE_TODO, COMPLETE_TODO} from '../actions';

const todos = (state = [], action) => {
    switch (action.type) {
    case ADD_TODO:
        return [
            ...state,
            {
                text: action.text,
                completed: false,
                id: uuidv1()
            }
        ];
    case REMOVE_TODO:
        return state.filter(todo => todo.id !== action.id);
    case COMPLETE_TODO:
        return state.map(todo => {
            if (todo.id === action.id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
    default:
        return state;
    }
};


const todoApp = combineReducers({
    todos
});

export default todoApp;
