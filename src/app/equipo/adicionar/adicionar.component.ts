import { Component, OnInit } from '@angular/core';
import { equipo } from "../equipo";
import { EquipoService } from "../equipo-service.service";

@Component({
  selector: 'equipo-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  equipo: equipo;

  constructor(private equipoService:EquipoService) { }

  ngOnInit() {
    this.equipo = new equipo;
  }
  onNewClick(){
    this.equipo = new equipo();
  }
  onSaveClick(){
    this.equipoService.equipoList.push(this.equipo);
}
}
