import { Injectable } from '@angular/core';
import { jugador } from "./jugador";

@Injectable()
export class JugadorService {
  
  jugadorList:Array<jugador>;

  constructor() {
    this.jugadorList = [
      {
      nombre:"Juan",
      posicion:"volante",
      ciudad:"Maizales",
      numero:9
      },
      
      {
        nombre:"Daniel",
        posicion: "portero",
        ciudad:"Cali",
        numero:1
        },
      {
          nombre:"Santiago",
          posicion: "lateral",
          ciudad:"Medellin",
          numero:4
          },
      {
            nombre:"Alejandro",
            posicion: "delantero",
            ciudad:"Manizales",
            numero:16
            },
    ];
   }

}
