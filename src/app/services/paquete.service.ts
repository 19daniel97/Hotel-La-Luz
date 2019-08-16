import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paquete } from '../models/paquete';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  selectedPaquete: Paquete;
  paquetes: Paquete[];
  readonly URL_API = 'http://localhost:3000/api/paquetes';

  constructor(public http: HttpClient) {
    this.selectedPaquete = new Paquete();
  }
  
  getPaquetes() {
    return this.http.get(this.URL_API);
  }

  postPaquete(Paquete: Paquete){
    return this.http.post(this.URL_API, Paquete);
  }

  putPaquete(paquete: Paquete){
    return this.http.put(this.URL_API + `/${paquete._id}`, paquete);
  }
  deletePaquete(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}