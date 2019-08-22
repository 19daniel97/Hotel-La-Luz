import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  selectedUsuario: Usuario= {
    _id:'',
    nombre:'',
    puesto:'',
    email:'',
    usuario:'',
    password:''
  };
  usuario: Usuario[];

  readonly URL_API = 'http://localhost:3000/api/usuario';
  readonly URL = 'http://localhost:3000/api';
  // readonly URL_API = '/api/usuario';
  // readonly URL = '/api';

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  
  constructor(public http: HttpClient) { 
    this.selectedUsuario = new Usuario();
  }

  getUsuarios() {
    return this.http.get(this.URL_API);
  }
  
  postUsuario(usuario: Usuario) {
    return this.http.post(this.URL_API, usuario);
  }

  putUsuario(usuario: Usuario) {
    return this.http.put(this.URL_API + `/${usuario._id}`, usuario);
  }

  deleteUsuario(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

  //HttpMethods
  postUser(user: Usuario) {
    return  this.http.post(this.URL+'/register',user, this.noAuthHeader);
   }
 
   login(authCredentials){
     return this.http.post(this.URL + '/authenticate', authCredentials, this.noAuthHeader);
   }
 
   getUserProfile(){
     return this.http.get(this.URL + '/userProfile');
   }
 
   //Helper Methods
 
   setToken(token: string){
     localStorage.setItem('token', token);
   }
 
   getToken(){
    return localStorage.getItem('token');
   }
 
   deleteToken() {
     localStorage.removeItem('token');
   }
 
   getUserPayload() {
     var token = this.getToken();
     if (token) {
       var userPayload = atob(token.split('.')[1]);
       return JSON.parse(userPayload);
     }
     else
       return null;
   }
 
   isLoggedIn(){
     var userPayload = this.getUserPayload();
     if (userPayload)
       return userPayload.exp > Date.now() /1000;
     else
       return false;
     }
 }
 

