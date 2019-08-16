import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Politica } from '../models/politica';
@Injectable({
  providedIn: 'root'
})
export class PoliticaService {

  selectedPolitica: Politica;
  politicas: Politica[];
  
  //readonly URL_API = 'http://localhost:3000/api/politicas';
  readonly URL_API = '/api/politicas';

  constructor(public http: HttpClient) {
    this.selectedPolitica = new Politica();
  }

  postPolitica(politica: Politica) {
    return this.http.post(this.URL_API, politica);
  }

  getPoliticas() {
    return this.http.get(this.URL_API);
  }

  putPolitica(politica: Politica) {
    return this.http.put(this.URL_API + `/${politica._id}`, politica);
  }

  deletePolitica(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
