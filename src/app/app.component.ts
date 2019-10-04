import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';
import { Store, select } from '@ngrx/store';
import { State } from './store';
import  * as todosAction  from './store/todos.actions';
import { map } from 'rxjs/operators';
import { TodoState } from './store/todos.reducer';


@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 public todos$: Observable<Todo[]> = this.store.pipe(
   select('todos')// on selectionne la partie de notre state que l'on veut récupérer donc la key todos dans index qui fait référence à notre todo reducer
//c'est vraiment la définiton de notre store
// select('todos') nous retoune le todos state
,map((todoState:TodoState)=> todoState.datas)

 ) // on utilise plus le todo service mais le store  ----->    public todos$: Observable<Todo[]> =this.todoService.todos$.asObservable();


  ngOnInit():void{
    this.store.dispatch(new todosAction.FetchTodo())
  }
 public message: string;

 constructor(private store:Store<State> ) {}

 public addTodo() {
   //this.todoService.addTodo({ message: this.message, done: false });
   // Une action est un objet avec un type et un payload
   this.store.dispatch(new todosAction.CreateTodo({ message: this.message, done: false }))
 }

 public toggleTodo(index: number) {
   //this.todoService.toggleTodo(index);
   this.store.dispatch( new todosAction.ToggleTodo(index));

 }

 public deleteTodo(index: number) {
   console.log(index);
   //this.todoService.deleteTodo(index);
   this.store.dispatch( new todosAction.DeleteTodo(index));

 }

}