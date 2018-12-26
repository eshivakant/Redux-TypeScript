import { State, initialState } from '../store';
import { Action, ActionTypes } from '../actions/actions';
//import { combineReducers } from 'redux';


export  function todoReducer(state: State = initialState,action:Action):State {
  

    switch (action.type){
        case ActionTypes.ADD_TODO: {
            const todo = action.payload.todo;
            return {
                ...state,
                todos: [...state.todos,todo]
            };
        }
        
        case ActionTypes.TOGGLE_TODO:{
            const todoId  = action.payload.todoId;
            return {
                ...state,
                todos:state.todos.map(todo => todo.id === todoId ? { ...todo, complete: !todo.complete } : todo)
            }
        }
        
    }

    return state;
};



export const reducer = todoReducer;


  