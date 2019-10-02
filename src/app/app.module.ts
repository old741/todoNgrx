import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { TodoService } from './todo.service';
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { reducers } from './store/app.reducer';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    FlexLayoutModule,
    StoreModule.forRoot(reducers )
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
