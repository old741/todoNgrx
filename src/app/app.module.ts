import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { RouterModule } from "@angular/router";
import {  StoreRouterConnectingModule,RouterStateSerializer } from "@ngrx/router-store";
import { MyRouterStateSerializer } from './store/router.helper';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
      //TodoModule,
    RouterModule.forRoot([
      {
        path:'', redirectTo:'todo' , pathMatch:'full',
        // pathMatch full pour que la route sois reconnu 
    },
    { 
      path:'todo', loadChildren: './todo/todo.module#TodoModule',
    },
  ]),
    StoreModule.forRoot(reducers,{metaReducers}),// déclaration d'un meta reducer
    StoreDevtoolsModule.instrument({
      name:'to do'
    }),
    EffectsModule.forRoot([]),// ne plus charger TodosEffect car il faut l'importer à partir du momen ou notre module todo est charger
    //on laisse le forRoot pour initialiser effectModule donc on va provide une fois le service Actions dans effects pour un avoir un seule singleton
    // cette instance sera mise à disposition grace au forRoot 
    //EffectsModule.forRoot([]), avec un array vide uniquement pour mettre en place le service Actions
    StoreRouterConnectingModule.forRoot({
      stateKey:'routing'
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
