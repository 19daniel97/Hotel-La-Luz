import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Oferta } from '../models/oferta';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  selectedOferta: Oferta;
  ofertas: Oferta[];
  readonly URL_API = 'http://localhost:3000/api/ofertas';

  constructor(public http: HttpClient) { 
    this.selectedOferta = new Oferta();
  }
  
  getOfertas() {
    return this.http.get(this.URL_API);
  }

  postOferta(Oferta: Oferta){
    return this.http.post(this.URL_API, Oferta);
  }

  putOferta(oferta: Oferta){
    return this.http.put(this.URL_API + `/${oferta._id}`, oferta);
  }
  deleteOferta(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
