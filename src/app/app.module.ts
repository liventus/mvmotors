import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolamundoComponent } from './holamundo/holamundo.component';
import { MenuDesplegableComponent } from './menu-desplegable/menu-desplegable.component';

@NgModule({
  declarations: [
    AppComponent,
    HolamundoComponent,
    MenuDesplegableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
