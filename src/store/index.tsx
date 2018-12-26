import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import { reducer } from '../reducer/reducer';

export class Todo{
    id:number;
    name:string;
    complete:boolean;
}

export interface State{
    todos:Todo[];
}

export const initialState : State = {todos:[]};

export const store = createStore(reducer, initialState, applyMiddleware(logger));


