import { Injectable } from '@angular/core';
import { partido } from "./partido";

@Injectable()
export class PartidoService{
  partidoList:Array<partido>;
  constructor() { 
    
    this.partidoList = [
      {
      estadio:"Juan",
      fecha:4,
      hora:4,
      
      },
      
      
    ];
  }

}
