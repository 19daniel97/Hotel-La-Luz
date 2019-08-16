import { Component, OnInit } from '@angular/core';

import { InfogenService } from '../../services/infogen.service';
import { NgForm } from '@angular/forms';
import { Infogen } from '../../models/infogen';

declare var M: any;

@Component({
  selector: 'app-infogen',
  templateUrl: './infogen.component.html',
  styleUrls: ['./infogen.component.css'],
  providers: [ InfogenService ]
})
export class InfogenComponent implements OnInit {

  constructor(public infogenService: InfogenService) { }

  ngOnInit() {
    this.getInfogens();
  }

  addInfogen(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.infogenService.putInfogen(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Actualizado'});
          this.getInfogens();
        });
    } else {
      this.infogenService.postInfogen(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Guardado'});
        this.getInfogens();
      });
    }
    
  }

  getInfogens() {
    this.infogenService.getInfogens()
      .subscribe(res => {
        this.infogenService.infogen = res as Infogen[];
      });
  }

  editInfogen(infogen: Infogen) {
    this.infogenService.selectedInfogen = infogen;
  }

  deleteInfogen(_id: string, form: NgForm) {
    if(confirm('¿Estas seguro de borrarlo?')) {
      this.infogenService.deleteInfogen(_id)
        .subscribe(res => {
          this.getInfogens();
          this.resetForm(form);
          M.toast({html: 'Eliminado'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.infogenService.selectedInfogen = new Infogen();
    }
  }


}
