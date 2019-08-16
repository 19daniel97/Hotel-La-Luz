import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Reservacion } from '../models/reservacion';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {

  selectedReservacion: Reservacion;
  reservaciones: Reservacion[];
  
  readonly URL_API = 'http://localhost:3000/api/reservaciones';

  constructor(public http: HttpClient) {
    this.selectedReservacion = new Reservacion();
  }

  postReservacion(reservacion: Reservacion) {
    return this.http.post(this.URL_API, reservacion);
  }

  getReservaciones() {
    return this.http.get(this.URL_API);
  }

  putReservacion(reservacion: Reservacion) {
    return this.http.put(this.URL_API + `/${reservacion._id}`, reservacion);
  }

  deleteReservacion(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}