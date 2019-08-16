import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import {UsuarioService} from '../../../services/usuario.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public userService: UsuarioService, public router: Router) { }

  model ={
    email : '',
    password : ''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  serverErrorMessages: string;
  ngOnInit() { 
    if(this.userService.isLoggedIn())
     this.router.navigateByUrl('/reservacion');
  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/reservacion');
      },
      err =>{
        this.serverErrorMessages = err.error.message;
        this.userService.deleteToken();
      }
    )
  }

}

// if(this.userService.isLoggedIn())
//this.router.navigateByUrl('/userprofile');
