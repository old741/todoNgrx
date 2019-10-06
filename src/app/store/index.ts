import  * as todosReducer from "./todos.reducer";
import { ActionReducerMap } from "@ngrx/store";


export interface State{
    todos: todosReducer.TodoState;
}

export const reducers:ActionReducerMap<State> ={
    todos: todosReducer.todosReducer
}