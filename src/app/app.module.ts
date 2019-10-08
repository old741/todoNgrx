import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { TodoService } from './todo.service';
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { reducers } from './store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { TodoEffects } from './store/todos.effects';
import { RouterModule } from "@angular/router";
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    FlexLayoutModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name:'to do'
    }),
    EffectsModule.forRoot([TodoEffects]),
  RouterModule.forRoot([
    {
      path:'',redirectTo:'todo',pathMatch:'full',
    },
    {
      path:'todo',component:TodoListComponent
    }
  ]),
],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
