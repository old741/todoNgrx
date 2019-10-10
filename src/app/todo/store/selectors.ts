import { createFeatureSelector,createSelector } from "@ngrx/store";
import { MyRouterState } from '../../store/router.helper';
import * as  routerReducer  from "@ngrx/router-store";
import { KEY_ROUTER } from '../../store';
import { Todo } from '../../todo.model';
import { TodoState } from './todos.reducer';


export const todosSelector = createFeatureSelector<TodoState>('todos');
export const routerSelector = createFeatureSelector<routerReducer.RouterReducerState<MyRouterState>>(KEY_ROUTER);


export const todoListSelector = createSelector(
    todosSelector,
    (todosState:TodoState) => todosState.datas
    
)
export const myRouterStateSelector = createSelector(
    routerSelector,
    (routerState)=> routerState.state
);

export const todoListArraySelector= createSelector(
    todosSelector,
    (todoState:TodoState)=> {
        if(todoState.datas){
            console.log(Object.keys(todoState.datas))
            return Object.keys(todoState.datas).map( idTodo => todoState.datas[idTodo])
        }else{
            return null;
        }
    }
);

export const selectedTodoSelector = createSelector(
    todoListSelector,
    myRouterStateSelector,
    (todos: {[todoId:string]:Todo}  , myRouterState:MyRouterState) => {
        const todoId=myRouterState.params.id;
            if(todos && todoId){
                return todos[todoId];
                //return todos.filter(todo => todo.id === todoId)[0];//filter retourne un array et on retourne le premiere element
            }else{
                return null;
            }
        }
);