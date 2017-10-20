import { Component, OnInit } from '@angular/core';
import { equipo } from "../equipo";

@Component({
  selector: 'equipo-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  equipo: equipo;

  constructor() { }

  ngOnInit() {
    this.equipo = new equipo;
  }

}
