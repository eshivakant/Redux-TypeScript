import { Todo } from '../store';

export const enum ActionTypes{
    ADD_TODO = '[todos] ADD_TODO',
    TOGGLE_TODO = '[todos] TOGGLE_TODO'
}

export interface IAddTodoAction {type:ActionTypes.ADD_TODO, payload:{todo:Todo}}
export interface IToggleTodoAction{type:ActionTypes.TOGGLE_TODO, payload:{todoId:number}}

let next = 0;
export function addTodo(name:string):IAddTodoAction{
    return{
        type:ActionTypes.ADD_TODO,
        payload:{
            todo:{
                id: next++,
                name: name,
                complete:false
            }
        }
    }
}

export function toggleTodo(todoId:number):IToggleTodoAction{
    return{
        type:ActionTypes.TOGGLE_TODO,
        payload:{
            todoId:todoId
        }
    }
}


export type Action = IAddTodoAction|IToggleTodoAction
