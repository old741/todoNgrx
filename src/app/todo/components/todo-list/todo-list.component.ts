import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../../todo.model';
import { Store, select } from '@ngrx/store';
import { State } from '../../../store';
import  * as todosAction  from '../../store/todos.actions';

import { selectedTodoSelector, todoListArraySelector } from 'src/app/todo/store/selectors';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

/*   public todos$: Observable<Todo[]> = this.store.pipe(
    select('todos')// on selectionne la partie de notre state que l'on veut récupérer donc la key todos dans index qui fait référence à notre todo reducer
 //c'est vraiment la définiton de notre store
 // select('todos') nous retoune le todos state
 ,map((todoState:TodoState)=> todoState.datas)
 
  ) // on utilise plus le todo service mais le store  ----->    public todos$: Observable<Todo[]> =this.todoService.todos$.asObservable();
  */
 public todos$: Observable<Todo[]> = this.store.pipe(select(todoListArraySelector));

 public selectedTodo$: Observable<Todo> = this.store.pipe(select(selectedTodoSelector));

   ngOnInit():void{
     this.store.dispatch(new todosAction.FetchTodo())
   }
  public message: string;
 
  constructor(private store:Store<State> ) {}
 
  public addTodo() {
    //this.todoService.addTodo({ message: this.message, done: false });
    // Une action est un objet avec un type et un payload
    this.store.dispatch(new todosAction.CreateTodo({ id:'',message: this.message, done: false }))
  }
 
  public toggleTodo(id:string) {
    //this.todoService.toggleTodo(index);
    this.store.dispatch( new todosAction.ToggleTodo(id));
 
  }
 
  public deleteTodo(id:string) {
   // console.log(id);
    //this.todoService.deleteTodo(index);
    this.store.dispatch( new todosAction.DeleteTodo(id));
 
  }

}
