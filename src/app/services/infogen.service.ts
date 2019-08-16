import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Infogen } from '../models/infogen';

@Injectable({
  providedIn: 'root'
})
export class InfogenService {
  selectedInfogen: Infogen;
  infogen: Infogen[];
  
  readonly URL_API = 'http://localhost:3000/api/infogen';

  constructor(public http: HttpClient) {
    this.selectedInfogen = new Infogen();
   }

  getInfogens() {
    return this.http.get(this.URL_API);
  }
  
  postInfogen(infogen: Infogen) {
    return this.http.post(this.URL_API, infogen);
  }

  putInfogen(infogen: Infogen) {
    return this.http.put(this.URL_API + `/${infogen._id}`, infogen);
  }

  deleteInfogen(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
