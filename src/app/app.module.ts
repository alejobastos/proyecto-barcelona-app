import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JugadorModule } from './jugador/jugador.module';
import { EquipoModule } from './equipo/equipo.module';
import { PartidoModule } from './partido/partido.module';
import { TecnicoModule } from './tecnico/tecnico.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JugadorModule,
    EquipoModule,
    PartidoModule,
    TecnicoModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
