import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ContadorComponent } from './contador/contador/contador.component';
// import { HeroeComponent } from './heroes/heroe/heroe.component';
// import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
 


@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent

    // HeroeComponent,
    // ListadoComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
