import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Atraccion } from '../models/atraccion';

@Injectable({
  providedIn: 'root'
})
export class AtraccionService {

  selectedAtraccion: Atraccion;
  atracciones: Atraccion[];
  
  readonly URL_API = 'http://localhost:3000/api/atracciones';

  constructor(public http: HttpClient) {
    this.selectedAtraccion = new Atraccion();
  }

  postAtraccion(atraccion: Atraccion) {
    return this.http.post(this.URL_API, atraccion);
  }

  getAtracciones() {
    return this.http.get(this.URL_API);
  }

  putAtraccion(atraccion: Atraccion) {
    return this.http.put(this.URL_API + `/${atraccion._id}`, atraccion);
  }

  deleteAtraccion(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}