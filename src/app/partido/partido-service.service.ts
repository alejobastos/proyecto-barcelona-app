import { Injectable } from '@angular/core';
import { partido } from "./partido";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PartidoService{
  partidoList:Array<partido>;
  constructor(private http: HttpClient) { }
  
    cargarpartido() {
      this.http.get("http://192.168.2.210:8080/ProyectoEquipoApp/webresources/edu.co.proyectoequipoapp.entidades.partido").subscribe(data => {
        this.partidoList = data as Array<partido>;
      });
    }
  
    crearpartido(par: partido) {
      const body = {estadio: par.estadio, fecha: par.fecha, hora: par.hora};
  
      this.http.post("http://192.168.2.210:8080/ProyectoEquipoApp/webresources/edu.co.proyectoequipoapp.entidades.partido", body)
      .subscribe(data => {
        alert('Partido creado Con Exito!');
        this.cargarpartido();
      });
    }

}
