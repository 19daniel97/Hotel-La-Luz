import { Component, OnInit } from '@angular/core';

import { TipohabService } from '../../services/tipohab.service';
import { NgForm } from '@angular/forms';
import { Tipohab } from '../../models/tipohab';

declare var M: any;

@Component({
  selector: 'app-tipohab',
  templateUrl: './tipohab.component.html',
  styleUrls: ['./tipohab.component.css'],
  providers: [ TipohabService ]
})
export class TipohabComponent implements OnInit {

  constructor(public tipohabService: TipohabService) { }

  ngOnInit() {
    this.getTiposhab();
  }

  addTipohab(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.tipohabService.putTipohab(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Actualizado'});
          this.getTiposhab();
        });
    } else {
      this.tipohabService.postTipohab(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Guardado'});
        this.getTiposhab();
      });
    }
    
  }

  getTiposhab() {
    this.tipohabService.getTiposhab()
      .subscribe(res => {
        this.tipohabService.tipohab = res as Tipohab[];
      });
  }

  editTipohab(tipohab: Tipohab) {
    this.tipohabService.selectedTipohab = tipohab;
  }

  deleteTipohab(_id: string, form: NgForm) {
    if(confirm('¿Estas seguro de borrarlo?')) {
      this.tipohabService.deleteTipohab(_id)
        .subscribe(res => {
          this.getTiposhab();
          this.resetForm(form);
          M.toast({html: 'Eliminado'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.tipohabService.selectedTipohab = new Tipohab();
    }
  }


}
