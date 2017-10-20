import { Component, OnInit } from '@angular/core';
import { partido } from "../partido";

@Component({
  selector: 'partido-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  partido: partido;

  constructor() { }

  ngOnInit() {
    this.partido = new partido;
  }

}
