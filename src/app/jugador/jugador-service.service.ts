import { Injectable } from '@angular/core';
import { jugador } from "./jugador";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JugadorService {
  
  jugadorList:Array<jugador>;

  constructor(private http: HttpClient) { }
  
    cargarJugadores() {
      this.http.get("http://192.168.43.13:8080/ProyectoEquipoApp/webresources/edu.co.proyectoequipoapp.entidades.jugador").subscribe(data => {
        this.jugadorList = data as Array<jugador>;
      });
    }
  
    crearJugador(jug: jugador) {
      const body = {nombre: jug.nombre,ciudad: jug.ciudad,numero: jug.numero,posicion: jug.posicion };
  
      this.http.post("http://192.168.43.13:8080/ProyectoEquipoApp/webresources/edu.co.proyectoequipoapp.entidades.jugador", body)
      .subscribe(data => {
        alert('Jugador creado Con Exito!');
        this.cargarJugadores();
      });
    }
  
}
