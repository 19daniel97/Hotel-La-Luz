import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Forpago } from '../models/forpago';

//Para observable en ocupacion
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForpagoService {
  selectedForpago: Forpago;
  forpago: Forpago[];

  public forpagos$ = new Subject<Forpago[]>();
  
  readonly URL_API = 'http://localhost:3000/api/forpago';

  constructor(public http: HttpClient) { 
    this.selectedForpago = new Forpago();
  }

  getForpagos() {
    return this.http.get(this.URL_API);
  }
  
  postForpago(forpago: Forpago) {
    return this.http.post(this.URL_API, forpago);
  }

  putForpago(forpago: Forpago) {
    return this.http.put(this.URL_API + `/${forpago._id}`, forpago);
  }

  deleteForpago(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

  //observable desde ocupacion
  agregarForpagos(forpago: Forpago) {
    this.forpago.push(forpago);
    this.forpagos$.next(this.forpago);
  }
  getForpagos$(): Observable<Forpago[]> {
    return this.forpagos$.asObservable();
  }
}
