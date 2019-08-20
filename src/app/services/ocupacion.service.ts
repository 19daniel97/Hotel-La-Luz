import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Ocupacion } from '../models/ocupacion';

@Injectable({
  providedIn: 'root'
})
export class OcupacionService {
  public selectedOcupacion: Ocupacion;
  public ocupacion: Ocupacion[];

  //readonly URL_API = 'http://localhost:3000/api/ocupacion';
  readonly URL_API = '/api/ocupacion';

  constructor(private http: HttpClient) {
    this.selectedOcupacion = new Ocupacion();
  }

  getOcupaciones() {
    return this.http.get(this.URL_API);
  }

  postOcupacion(ocupacion: Ocupacion) {
    return this.http.post(this.URL_API, ocupacion);
  }

  putOcupacion(ocupacion: Ocupacion) {
    return this.http.put(this.URL_API + `/${ocupacion._id}`, ocupacion);
  }

  deleteOcupacion(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

  //verificar habitacion y fecha
  //verifyOcupacion() {
    //return this.http.get(this.URL_API);
  //}
}
