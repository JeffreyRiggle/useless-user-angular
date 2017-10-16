import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserControllerComponent } from './user-controller.component';
import { UserListComponent } from './user-list.component';
import { UserListItemComponent } from './user-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    UserControllerComponent,
    UserListComponent,
    UserListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
