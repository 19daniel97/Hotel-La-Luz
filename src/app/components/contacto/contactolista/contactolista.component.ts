import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../../services/contacto.service';
import { Contacto } from '../../../models/contacto';
@Component({
  selector: 'app-contactolista',
  templateUrl: './contactolista.component.html',
  styleUrls: ['./contactolista.component.css']
})
export class ContactolistaComponent implements OnInit {

  constructor(public contactoService: ContactoService) { }

  ngOnInit() {
    this.getContactos();
  }
  getContactos() {
    this.contactoService.getContactos()
      .subscribe(res => {
        this.contactoService.contactos = res as Contacto[];
      });
  }

}
