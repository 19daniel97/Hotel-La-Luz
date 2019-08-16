import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  selectedContacto: Contacto;
  contactos: Contacto[];
  
  readonly URL_API = 'http://localhost:3000/api/contactos';

  constructor(public http: HttpClient) {
    this.selectedContacto = new Contacto();
  }

  postContacto(contacto: Contacto) {
    return this.http.post(this.URL_API, contacto);
  }

  getContactos() {
    return this.http.get(this.URL_API);
  }

  putContacto(contacto: Contacto) {
    return this.http.put(this.URL_API + `/${contacto._id}`, contacto);
  }

  deleteContacto(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}