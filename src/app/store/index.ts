import  * as todosReducer from "./todos.reducer";
import { ActionReducerMap } from "@ngrx/store";
import * as  routerReducer  from "@ngrx/router-store";
import { MyRouterState } from './router.helper';

export const KEY_ROUTER='routing';

// index défini la map de réducer de notre architecture

export interface State{
    todos: todosReducer.TodoState;
    routing: routerReducer.RouterReducerState<MyRouterState>;
}

export const reducers:ActionReducerMap<State> ={
    todos: todosReducer.todosReducer,
    routing: routerReducer.routerReducer
}