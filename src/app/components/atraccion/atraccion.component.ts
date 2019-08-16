import { Component, OnInit } from '@angular/core';

import { AtraccionService } from '../../services/atraccion.service';
import { NgForm } from '@angular/forms';
import { Atraccion } from '../../models/atraccion';
import { ContactoService } from 'src/app/services/contacto.service';
import { Contacto } from 'src/app/models/contacto';

declare var M: any;

@Component({
  selector: 'app-atraccion',
  templateUrl: './atraccion.component.html',
  styleUrls: ['./atraccion.component.css'],
  providers: [AtraccionService]
})
export class AtraccionComponent implements OnInit {

  constructor(public atraccionService: AtraccionService,
    public contactoService: ContactoService) { }

  ngOnInit() {
    this.getAtracciones();
    this.getContactos();
  }

  addAtraccion(form?: NgForm) {
    //console.log(form.value);
    if (form.value._id) {
      this.atraccionService.putAtraccion(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getAtracciones();
          M.toast({ html: 'Updated Successfully' });
        });
    } else {
      this.atraccionService.postAtraccion(form.value)
        .subscribe(res => {
          this.getAtracciones();
          this.resetForm(form);
          M.toast({ html: 'Save successfully' });
        });
    }

  }

  getAtracciones() {
    this.atraccionService.getAtracciones()
      .subscribe(res => {
        this.atraccionService.atracciones = res as Atraccion[];
      });
  }

  getContactos() {
    this.contactoService.getContactos()
      .subscribe(res => {
        this.contactoService.contactos = res as Contacto[];
        console.log(res);
      });
  }

  editAtraccion(atraccion: Atraccion) {
    this.atraccionService.selectedAtraccion = atraccion;
  }

  deleteAtraccion(_id: string, form: NgForm) {
    if (confirm('Are you sure you want to delete it?')) {
      this.atraccionService.deleteAtraccion(_id)
        .subscribe(res => {
          this.getAtracciones();
          this.resetForm(form);
          M.toast({ html: 'Deleted Succesfully' });
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.atraccionService.selectedAtraccion = new Atraccion();
    }
  }
}

