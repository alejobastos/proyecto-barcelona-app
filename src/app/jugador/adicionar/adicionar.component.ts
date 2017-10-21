import { Component, OnInit } from '@angular/core';
import {jugador} from "../jugador";
import { JugadorService } from "../jugador-service.service";

@Component({
  selector: 'jugador-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {


  jugador: jugador;

  constructor(private jugadorService:JugadorService) { }

  ngOnInit() {
    this.jugador = new jugador();
   
  }
  
  onNewClick(){
    this.jugador = new jugador();
  }
onSaveClick(){
this.jugadorService.crearJugador(this.jugador);

}


}





 
  
  
