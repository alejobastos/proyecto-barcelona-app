import { Component, OnInit } from '@angular/core';
import { equipo } from "../equipo";
import { EquipoService } from "../equipo-service.service";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'equipo-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  

  constructor(private equipoService:EquipoService) { }

  ngOnInit() {
   this.equipoService.cargarEquipo();
  }

}
