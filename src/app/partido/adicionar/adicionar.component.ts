import { Component, OnInit } from '@angular/core';
import { partido } from "../partido";
import { PartidoService } from "../partido-service.service";

@Component({
  selector: 'partido-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  partido: partido;

  constructor(private partidoService:PartidoService) { }

  ngOnInit() {
    this.partido = new partido;
  }
  onNewClick(){
    this.partido = new partido();
  }
  onSaveClick(){
    this.partidoService.crearpartido(this.partido);
  }
  

}
