export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const addTodo = text => {
    return {
        type: ADD_TODO,
        text
    };
};

export const removeTodo = id => {
    return {
        type: REMOVE_TODO,
        id
    };
};

export const completeTodo = id => {
    return {
        type: COMPLETE_TODO,
        id
    };
};
