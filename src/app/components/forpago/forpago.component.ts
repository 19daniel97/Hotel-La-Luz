import { Component, OnInit, Input } from '@angular/core';

import { ForpagoService } from '../../services/forpago.service';
import { NgForm } from '@angular/forms';
import { Forpago } from '../../models/forpago';


declare var M: any;


@Component({
  selector: 'app-forpago',
  templateUrl: './forpago.component.html',
  styleUrls: ['./forpago.component.css'],
  providers: [ ForpagoService ]
})
export class ForpagoComponent implements OnInit {

  constructor(public forpagoService: ForpagoService) { }

  ngOnInit() {
    this.getForpagos();
  }

  addForpago(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.forpagoService.putForpago(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Actualizado'});
          this.getForpagos();
        });
    } else {
      this.forpagoService.postForpago(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Guardado'});
        this.getForpagos();
      });
    }
    
  }

  
  getForpagos() {
    this.forpagoService.getForpagos()
      .subscribe(res => {
        this.forpagoService.forpago = res as Forpago[];
      });
  }

  editForpago(forpago: Forpago) {
    this.forpagoService.selectedForpago = forpago;
  }

  deleteForpago(_id: string, form: NgForm) {
    if(confirm('¿Estas seguro de borrarlo?')) {
      this.forpagoService.deleteForpago(_id)
        .subscribe(res => {
          this.getForpagos();
          this.resetForm(form);
          M.toast({html: 'Eliminado'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.forpagoService.selectedForpago = new Forpago();
    }
  }


}
