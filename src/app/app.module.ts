import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { TodoService } from './todo.service';
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { reducers, KEY_ROUTER } from './store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { TodoEffects } from './store/todos.effects';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { RouterModule } from "@angular/router";
import {  StoreRouterConnectingModule,RouterStateSerializer } from "@ngrx/router-store";
import { MyRouterStateSerializer } from './store/router.helper';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    FlexLayoutModule,
    RouterModule.forRoot([
      {
        path:'', redirectTo:'todo' , pathMatch:'full',
        // pathMatch full pour que la route sois reconnu 
    },
    { 
      path: 'todo',component:TodoListComponent
    },
    {
      path: 'todo/:id',component:TodoListComponent
    }
  ]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name:'to do'
    }),
    EffectsModule.forRoot([TodoEffects]),
    StoreRouterConnectingModule.forRoot({
      stateKey:KEY_ROUTER
    })

  ],
  providers: [TodoService,
    {
    provide: RouterStateSerializer,
    useClass: MyRouterStateSerializer
   }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
