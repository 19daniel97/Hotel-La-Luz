import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario';

declare var M: any;


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [ UsuarioService ]
})
export class UsuarioComponent implements OnInit {

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  addUsuario(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.usuarioService.putUsuario(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Actualizado'});
          this.getUsuarios();
        });
    } else {
      this.usuarioService.postUsuario(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Guardado'});
        this.getUsuarios();
      });
    }
    
  }

  getUsuarios() {
    this.usuarioService.getUsuarios()
      .subscribe(res => {
        this.usuarioService.usuario = res as Usuario[];
      });
  }

  editUsuario(usuario: Usuario) {
    this.usuarioService.selectedUsuario = usuario;
  }

  deleteUsuario(_id: string, form: NgForm) {
    if(confirm('¿Estas seguro de borrarlo?')) {
      this.usuarioService.deleteUsuario(_id)
        .subscribe(res => {
          this.getUsuarios();
          this.resetForm(form);
          M.toast({html: 'Eliminado'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.usuarioService.selectedUsuario = new Usuario();
    }
  }

}
