import { Action } from '@ngrx/store';
import { Todo } from '../todo.model';
import { Observable } from 'rxjs';

export const TODO_CREATE='[todo] create';
export const TODO_DELETE='[todo] delete';
export const TODO_TOGGLE='[todo] toggle';

export const FETCH_TODO='[todo] fetch';
export const FETCH_TODO_SUCCESS='[todo] fetch success';
export const FETCH_TODO_ERROR='[todo] fetch error';

export class CreateTodo implements Action{
    readonly type = TODO_CREATE
    constructor(public payload:Todo){}
}

export class DeleteTodo implements Action{
    readonly type = TODO_DELETE
    constructor(public payload:number){}
}

export class ToggleTodo implements Action{
    readonly type = TODO_TOGGLE
    constructor(public payload:number){}
}
export type TodosActionType= 
CreateTodo|
DeleteTodo|
ToggleTodo |
FetchTodo|
FetchTodoSuccess|
FetchTodoError;


export class FetchTodo implements Action{
    readonly type = FETCH_TODO;
}
export class FetchTodoSuccess implements Action{
    readonly type = FETCH_TODO_SUCCESS;
    constructor(public payload:Todo[]){}
}
export class FetchTodoError implements Action{
    readonly type = FETCH_TODO_ERROR;
    constructor(public payload:any){}

}
