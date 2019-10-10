import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './store/todos.reducer';
import { EffectsFeatureModule } from '@ngrx/effects/src/effects_feature_module';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/todos.effects';


@NgModule({
  declarations: [TodoComponent,TodoListComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([TodoEffects]),
    StoreModule.forFeature('todos',todosReducer),// le nom de la key sur lequel on va greffer le reducer et le reducer associé
    RouterModule.forChild([{
        path:'',component:TodoComponent,children:[
          {
            path:':id',component:TodoListComponent
          }, {
            path:'',component:TodoListComponent
          },
        ]

        
      }]
    ),
    FormsModule,FlexLayoutModule
  ]
})
export class TodoModule { }
