import { Injectable } from '@angular/core';
import { jugador } from "./jugador";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JugadorService {
  
  jugadorList:Array<jugador>;

  constructor(private http: HttpClient) { }
  
    cargarJugadores() {
      this.http.get("http://localhost:8080/proyectoangular/webresources/co.edu.equipo.entidades.jugador").subscribe(data => {
        this.jugadorList = data as Array<jugador>;
      });
    }
  
    crearJugador(jug: jugador) {
      const body = {nombre: jug.nombre,ciudad: jug.ciudad,numero: jug.numero,posicio: jug.posicion };
  
      this.http.post("http://localhost:8080/proyectoangular/webresources/co.edu.equipo.entidades.jugador", body)
      .subscribe(data => {
        alert('Jugador creado Con Exito!');
        this.cargarJugadores();
      });
    }
  
}
