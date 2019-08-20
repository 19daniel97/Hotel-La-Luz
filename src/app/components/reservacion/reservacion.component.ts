import { Component, OnInit } from '@angular/core';
import { ReservacionService } from '../../services/reservacion.service';
import { NgForm } from '@angular/forms';
import { Reservacion } from '../../models/reservacion';
import { Habitaciontipo } from '../../models/habitaciontipo';
import { Tipohab } from '../../models/tipohab';
import { TipohabService } from 'src/app/services/tipohab.service';
declare var M: any;

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css'],
  providers: [ ReservacionService ]
})
export class ReservacionComponent implements OnInit {



Habitaciontipo: Habitaciontipo[] = [ 
  {id: 1, name: 'Habitacion Doble'},
  {id: 2, name: 'Habitacion King-size'},
  {id: 3, name: 'Habitacion Suite'}
]
 
  constructor(public reservacionService: ReservacionService, 
    public tipohabService: TipohabService) { }

  ngOnInit() {
    this.getReservaciones(); 
    this.getTiposhab();
  }
  getTiposhab() {
    this.tipohabService.getTiposhab()
      .subscribe(res => {
        this.tipohabService.tipohab = res as Tipohab[];
      });
  }

  addReservacion(form?: NgForm) {
    //console.log(form.value);
    if(form.value._id) {
      this.reservacionService.putReservacion(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getReservaciones();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.reservacionService.postReservacion(form.value)
      .subscribe(res => {
        this.getReservaciones();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }

  getReservaciones() {
    this.reservacionService.getReservaciones()
      .subscribe(res => {
        this.reservacionService.reservaciones = res as Reservacion[];
      });
  }

  editReservacion(reservacion: Reservacion) {
    this.reservacionService.selectedReservacion = reservacion;
  }

  deleteReservacion(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.reservacionService.deleteReservacion(_id)
        .subscribe(res => {
          this.getReservaciones();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.reservacionService.selectedReservacion = new Reservacion();
    }
  }
//  getTotalAmount() {
 //   return this.reservacionService.reservaciones.map(i => i.NumHab).reduce((acc, value) => ñacc + value, 0);
 // }
}

