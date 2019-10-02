import { ActionReducerMap,Action } from "@ngrx/store";
import { Todo } from "../todo.model";

export interface TodoState{
    datas:Todo[];
}
export interface State{
    todos: TodoState;
}
export function todosReducer(state:TodoState, action:Action):TodoState{
    return state;
}

export const reducers:ActionReducerMap<State> ={
    todos: todosReducer
}