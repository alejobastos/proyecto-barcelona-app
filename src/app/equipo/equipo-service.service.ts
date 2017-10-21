import { Injectable } from '@angular/core';
import { equipo } from "./equipo";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EquipoService {

  equipoList:Array<equipo>;

  constructor(private http: HttpClient) { }
  
    cargarEquipo() {
      this.http.get("http://192.168.2.210:8080/ProyectoEquipoApp/webresources/edu.co.proyectoequipoapp.entidades.equipo").subscribe(data => {
        this.equipoList = data as Array<equipo>;
      });
    }
  
    crearEquipo(equ: equipo) {
      const body = {nombre: equ.nombre, ciudad: equ.ciudad, categoria: equ.categoria, fundado: equ.fundado};
  
      this.http.post("http://192.168.2.210:8080/ProyectoEquipoApp/webresources/edu.co.proyectoequipoapp.entidades.equipo", body)
      .subscribe(data => {
        alert('Equipo creado con exito Con Exito!');
        this.cargarEquipo();
      });
    }

}
