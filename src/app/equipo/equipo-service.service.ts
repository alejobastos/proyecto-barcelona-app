import { Injectable } from '@angular/core';
import { equipo } from "./equipo";

@Injectable()
export class EquipoService {

  equipoList:Array<equipo>;

  constructor() { 
    this.equipoList = [
      {
      nombre:"Juan",
      ciudad:"volante",
      categoria:"Maizales",
      fundado:9
      },
      
      
    ];
  }

}
