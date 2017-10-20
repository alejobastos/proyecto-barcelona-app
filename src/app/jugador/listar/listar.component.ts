import { Component, OnInit } from '@angular/core';
import { jugador } from "../jugador";
import { JugadorService } from "../jugador-service.service";
 @Component({
  selector: 'jugador-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
 
  jugadorList:Array<jugador>;
  
  constructor(private jugadorService:JugadorService) { }

  ngOnInit() {
    
  }

}




  

  