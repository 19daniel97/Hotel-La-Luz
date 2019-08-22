import { Component, OnInit } from '@angular/core';

import { OcupacionService } from '../../services/ocupacion.service';
import { HabitacionService } from '../../services/habitacion.service';
import { NgForm } from '@angular/forms';
import { Ocupacion } from '../../models/ocupacion';
import { Habitacion } from '../../models/habitacion';

import { ReporteComponent } from './reporte/reporte.component'
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-ocupacion',
  templateUrl: './ocupacion.component.html',
    styleUrls: ['./ocupacion.component.css'],
  providers: [OcupacionService, HabitacionService, ReporteComponent]
})
export class OcupacionComponent implements OnInit {
 
  habitaciones;
  habitacion;

  constructor(public ocupacionService: OcupacionService, public habitacionService: HabitacionService, public reporteComponent: ReporteComponent,
            public router: Router) { }

  ngOnInit() {
    this.getOcupaciones();
    this.reporteComponent.generarPDF();
    this.getHabitaciones();
  }

  getHabitaciones() {
    this.habitacionService.getHabitaciones()
      .subscribe(res => {
        this.habitaciones = res as Habitacion[];
      });
  }

  addOcupacion(form: NgForm) {
    console.log(form.value.habitacion);
    if(form.value._id) {
      this.ocupacionService.putOcupacion(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Actualizado'});
          this.getOcupaciones();
        });
    } else {
      this.ocupacionService.postOcupacion(form.value)
      .subscribe(res => {
        this.habitacionService.getHabitacion(form.value.habitacion)
          .subscribe(res => {
            this.habitacion = res as Habitacion;
            this.habitacion.ocupacion = true;
            this.habitacionService.putHabitacion(this.habitacion).subscribe(res => {
              console.log("Se modifico el status")
            })
          });
        this.resetForm(form);
        M.toast({html: 'Guardado'});
        this.router.navigateByUrl('/reporte');
        this.getOcupaciones();
      });
    }
    
  }

  getOcupaciones() {
    this.ocupacionService.getOcupaciones()
      .subscribe(res => {
        this.ocupacionService.ocupacion = res as Ocupacion[];
      });
  }

  editOcupacion(ocupacion: Ocupacion) {
    this.ocupacionService.selectedOcupacion = ocupacion;
  }

  deleteOcupacion(_id: string, form: NgForm) {
    if(confirm('¿Estas seguro de borrarlo?')) {
      this.ocupacionService.deleteOcupacion(_id)
        .subscribe(res => {
          this.getOcupaciones();
          this.resetForm(form);
          M.toast({html: 'Eliminado'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.ocupacionService.selectedOcupacion = new Ocupacion();
    }
  }

  
  

}
