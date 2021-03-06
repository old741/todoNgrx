import { ActionReducerMap, MetaReducer, ActionReducer } from "@ngrx/store";
import * as  routerReducer  from "@ngrx/router-store";
import { MyRouterState } from './router.helper';

export const KEY_ROUTER='routing';

// index défini la map de réducer de notre architecture

export interface State{
   // todos: todosReducer.TodoState;
    routing: routerReducer.RouterReducerState<MyRouterState>;
}

export const reducers:ActionReducerMap<State> ={
  //  todos: todosReducer.todosReducer,
    routing: routerReducer.routerReducer
}
/**
 * cette fonction sera invoquer avant l'appel dun reducer
 */
export function logger(reducer:ActionReducer<State>):ActionReducer<State>{
  return function(state:State,action:any):State{
    console.log('state : ',state);
    console.log('action :',action)
    return reducer(state,action);
  }
}
export const metaReducers:MetaReducer<State>[]=[logger]