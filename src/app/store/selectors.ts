import { createFeatureSelector,createSelector } from "@ngrx/store";
import { TodoState } from './app.reducer';
import { MyRouterState } from './router.helper';
import * as  routerReducer  from "@ngrx/router-store";
import { KEY_ROUTER } from '.';
import { Todo } from '../todo.model';


export const todosSelector = createFeatureSelector<TodoState>('todos');
export const routerSelector = createFeatureSelector<routerReducer.RouterReducerState<MyRouterState>>(KEY_ROUTER);

export const myRouterStateSelector = createSelector(
    routerSelector,
    (routerState)=>{return routerState.state}
);

export const todoListSelector = createSelector(
    todosSelector,
    (todosState:TodoState) => {
        return todosState.datas;
    }
)

export const selectedTodoSelector = createSelector(
    todoListSelector,
    myRouterStateSelector,
    (todos:Todo[] , myRouterState:MyRouterState) => {
        const todoId=myRouterState.params.id;
            if(todos && todoId){
               // return todos.indexOf(todoId);
                return todos.filter(todo => todo.id === todoId)[0];//filter retourne un array et on retourne le premiere element
            }else{
                return null;
            }
        }
);