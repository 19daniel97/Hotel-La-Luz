import { Component, OnInit } from '@angular/core';

import { OcupacionService } from '../../services/ocupacion.service';
import { ForpagoService } from '../../services/forpago.service';
import { HabitacionService } from '../../services/habitacion.service';
import { NgForm } from '@angular/forms';
import { Ocupacion } from '../../models/ocupacion';
import { Forpago } from '../../models/forpago';
import { Habitacion } from '../../models/habitacion';

import { ReporteComponent } from './reporte/reporte.component'

//observa desde forpago
import { Observable } from 'rxjs';

declare var M: any;

@Component({
  selector: 'app-ocupacion',
  templateUrl: './ocupacion.component.html',
    styleUrls: ['./ocupacion.component.css'],
  providers: [OcupacionService, ForpagoService, HabitacionService, ReporteComponent]
})
export class OcupacionComponent implements OnInit {
  forpago: Forpago[] = [];
  habitaciones: Habitacion[] = [];

  habitaciones$: Observable<Habitacion[]>;

  constructor(public ocupacionService: OcupacionService, public forpagoService: ForpagoService, public habitacionService: HabitacionService, public reporteComponent: ReporteComponent) { }

  ngOnInit() {
    this.getOcupaciones();
    //this.habitacionService.getHabitaciones();
    //this.forpagoService.getForpagos();
    //this.habitaciones$ = this.habitacionService.getHabitacionesO();
   // this.habitaciones$.subscribe(habitaciones => this.habitaciones = habitaciones);
    this.reporteComponent.generarPDF();
  }

  getForpagos() {
    this.forpagoService.getForpagos()
      .subscribe(res => {
        this.forpagoService.forpago = res as Forpago[];
      });
  }

  addOcupacion(form?: NgForm) {
    console.log(form.value);
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
        this.resetForm(form);
        M.toast({html: 'Guardado'});
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
