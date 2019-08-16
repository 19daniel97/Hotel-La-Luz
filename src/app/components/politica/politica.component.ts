import { Component, OnInit } from '@angular/core';

import { PoliticaService } from '../../services/politica.service';
import { NgForm } from '@angular/forms';
import { Politica } from '../../models/politica';

declare var M: any;

@Component({
  selector: 'app-politica',
  templateUrl: './politica.component.html',
  styleUrls: ['./politica.component.css'],
  providers: [ PoliticaService ]
})
export class PoliticaComponent implements OnInit {

  constructor(public politicaService: PoliticaService) { }

  ngOnInit() {
    this.getPoliticas();
  }

  addPolitica(form?: NgForm) {
    //console.log(form.value);
    if(form.value._id) {
      this.politicaService.putPolitica(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getPoliticas();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.politicaService.postPolitica(form.value)
      .subscribe(res => {
        this.getPoliticas();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }

  getPoliticas() {
    this.politicaService.getPoliticas()
      .subscribe(res => {
        this.politicaService.politicas = res as Politica[];
      });
  }

  editPolitica(politica: Politica) {
    this.politicaService.selectedPolitica = politica;
  }

  deletePolitica(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.politicaService.deletePolitica(_id)
        .subscribe(res => {
          this.getPoliticas();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.politicaService.selectedPolitica = new Politica();
    }
  }
}
