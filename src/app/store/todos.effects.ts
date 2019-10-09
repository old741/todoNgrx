import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable ,of} from 'rxjs';
import { Action } from '@ngrx/store';
import { FETCH_TODO, FetchTodo, FetchTodoSuccess, FetchTodoError } from './todos.actions';
import { switchMap, map,catchError } from 'rxjs/operators';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Injectable()
export class TodoEffects{
    @Effect()
    public fetchTodo$:Observable<Action> = this.action$.pipe(
        ofType(FETCH_TODO),
        switchMap((fetchtodo:FetchTodo)=>{
            return this.tododService.getTodo();
        }),
        map((todos:Todo[])=>{ 
            return new FetchTodoSuccess(todos)
        }),
        catchError(((error:any) =>{ 
            return of( new FetchTodoError(error))
        }))
    )
    constructor(
        private action$:Actions,
        private tododService:TodoService){}
}