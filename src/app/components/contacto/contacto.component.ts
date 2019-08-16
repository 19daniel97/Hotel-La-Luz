import { Component, OnInit } from '@angular/core';

import { ContactoService } from '../../services/contacto.service';
import { NgForm } from '@angular/forms';
import { Contacto } from '../../models/contacto';

declare var M: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: [ ContactoService ]
})
export class ContactoComponent implements OnInit {

  constructor(public contactoService: ContactoService) { }

  ngOnInit() {
    this.getContactos();
  }

  addContacto(form?: NgForm) {
    //console.log(form.value);
    if(form.value._id) {
      this.contactoService.putContacto(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getContactos();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.contactoService.postContacto(form.value)
      .subscribe(res => {
        this.getContactos();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }

  getContactos() {
    this.contactoService.getContactos()
      .subscribe(res => {
        this.contactoService.contactos = res as Contacto[];
      });
  }

  editContacto(contacto: Contacto) {
    this.contactoService.selectedContacto = contacto;
  }

  deleteContacto(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.contactoService.deleteContacto(_id)
        .subscribe(res => {
          this.getContactos();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.contactoService.selectedContacto = new Contacto();
    }
  }
}

