import { Component, OnInit } from '@angular/core';

import { HabitacionService } from '../../services/habitacion.service';
import { NgForm } from '@angular/forms';
import { Habitacion } from '../../models/habitacion';

declare var M: any;

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css'],
  providers: [ HabitacionService ]
})
export class HabitacionComponent implements OnInit {

  constructor(public habitacionService: HabitacionService) { }

  ngOnInit() {
    this.getHabitaciones();
  }

  addHabitacion(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.habitacionService.putHabitacion(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getHabitaciones();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.habitacionService.postHabitacion(form.value)
      .subscribe(res => {
        this.getHabitaciones();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }

  getHabitaciones() {
    this.habitacionService.getHabitaciones()
      .subscribe(res => {
        this.habitacionService.habitaciones = res as Habitacion[];
      });
  }

  editHabitacion(habitacion: Habitacion) {
    this.habitacionService.selectedHabitacion = habitacion;
  }

  deleteHabitacion(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.habitacionService.deleteHabitacion(_id)
        .subscribe(res => {
          this.getHabitaciones();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.habitacionService.selectedHabitacion = new Habitacion();
    }
  }
}
