import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Tipohab } from '../models/tipohab';

@Injectable({
  providedIn: 'root'
})
export class TipohabService {

  selectedTipohab: Tipohab;
  tipohab: Tipohab[];
  
  //readonly URL_API = 'http://localhost:3000/api/tipohab';
  readonly URL_API = '/api/tipohab';


  constructor(public http: HttpClient) {
    this.selectedTipohab = new Tipohab();
  }

  getTiposhab() {
    return this.http.get(this.URL_API);
  }
  
  postTipohab(tipohab: Tipohab) {
    return this.http.post(this.URL_API, tipohab);
  }

  putTipohab(tipohab: Tipohab) {
    return this.http.put(this.URL_API + `/${tipohab._id}`, tipohab);
  }

  deleteTipohab(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
