
import { Injectable } from '@angular/core';
import { BehaviorSubject, timer,Observable } from 'rxjs';
import { Todo } from './todo.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  public getTodo():Observable<Todo[]>{
    return timer(2000).pipe(
      map( ()=> [{
        id:'1',
        message:'work',
        done:false
      },
      {
        id:'2',
        message:'call JM',
        done:true
      }]
      )
    );
  }

}