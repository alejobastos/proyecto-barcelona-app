import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JugadorModule } from './jugador/jugador.module';
import { EquipoModule } from './equipo/equipo.module';
import { PartidoModule } from './partido/partido.module';
import { TecnicoModule } from './tecnico/tecnico.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CurrentOptionComponent } from './current-option/current-option.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule 
} from '@angular/material';
import{RouterModule, Routes}from '@angular/router';
import{IndexComponent}from './jugador/index/index.component';
import{AdicionarComponent as EquipoAdicionarComponet}from './equipo/adicionar/adicionar.component';


const appRoutes: Routes = [
  {path: 'jugador/index', component:IndexComponent},
  {path: 'equipo/adicionar', component:EquipoAdicionarComponet},

]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    JugadorModule,
    EquipoModule,
    PartidoModule,
    TecnicoModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule, 
    RouterModule.forRoot(
appRoutes

    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
