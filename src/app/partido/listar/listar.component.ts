import { Component, OnInit } from '@angular/core';
import { partido } from "../partido";
import { PartidoService } from "../partido-service.service";

@Component({
  selector: 'partido-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

 

  constructor(private partidoService:PartidoService) { }

  ngOnInit() {
  }

}
