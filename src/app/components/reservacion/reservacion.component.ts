import { Component, OnInit, NgModule } from '@angular/core';
import { ReservacionService } from '../../services/reservacion.service';
import { NgForm } from '@angular/forms';
import { Reservacion } from '../../models/reservacion';
import { Tipohab } from '../../models/tipohab';
import { TipohabService } from 'src/app/services/tipohab.service';

import { HabitacionService } from '../../services/habitacion.service';
import { Habitacion } from 'src/app/models/habitacion';
import { ActivatedRoute, Router } from '@angular/router';

//import {MatCheckboxModule} from '@angular/material/checkbox';
//import {MatFormFieldModule} from '@angular/material/form-field';
declare var M: any;

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css'],
  providers: [ ReservacionService ]
})

/* @NgModule({
  imports: [MatCheckboxModule, MatFormFieldModule],
  exports: [MatCheckboxModule, MatFormFieldModule]
}) */

export class ReservacionComponent implements OnInit {
  room;
  habitaciones;
  public idHabitacion = this._route
  .snapshot.paramMap.get('id');

 
  constructor(public reservacionService: ReservacionService, 
    public habitacionService: HabitacionService,
    public _route:ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.getReservaciones(); 
    this.getHabitaciones();
    this.getroom();
  }

  getHabitaciones() {
    this.habitacionService.getHabitaciones()
      .subscribe(res => {
        this.habitaciones = res as Habitacion[];
      });
  }

  addReservacion(form?: NgForm) {
    this.reservacionService.selectedReservacion.habitacion = this.room;
    console.log(form.value);
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
        this.router.navigateByUrl('/reservacionusuario');
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

  getroom(){
    this.habitacionService.getHabitacion(this.idHabitacion).subscribe(res =>{
      this.room = res as Habitacion;
    });
  }
}

