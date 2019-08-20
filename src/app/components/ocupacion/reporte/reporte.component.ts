import { Component, OnInit } from '@angular/core';
import { OcupacionService } from '../../../services/ocupacion.service';
import { } from '../ocupacion.component'

//PDF
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Ocupacion } from 'src/app/models/ocupacion';
import { NgForm } from '@angular/forms';

declare var M: any;
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  constructor(public ocupacionService: OcupacionService) { }

  ngOnInit() {
    this.getOcupaciones();
  }

  getOcupaciones() {
    this.ocupacionService.getOcupaciones()
      .subscribe(res => {
        this.ocupacionService.ocupacion = res as Ocupacion[];
      });
  }

  addOcupacion(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.ocupacionService.putOcupacion(form.value)
        .subscribe(res => {
         
          M.toast({html: 'Actualizado'});
          this.getOcupaciones();
        });
    } else {
      this.ocupacionService.postOcupacion(form.value)
      .subscribe(res => {
        
        M.toast({html: 'Guardado'});
        this.getOcupaciones();
      });
    }
    
  }


  editOcupacion(ocupacion: Ocupacion) {
    this.ocupacionService.selectedOcupacion = ocupacion;
  }

  deleteOcupacion(_id: string, form: NgForm) {
    if(confirm('¿Estas seguro de borrarlo?')) {
      this.ocupacionService.deleteOcupacion(_id)
        .subscribe(res => {
          this.getOcupaciones();
          
          M.toast({html: 'Eliminado'});
        });
    }
  }


  generarPDF(){
    html2canvas(document.getElementById('taboculta'), {
      allowTaint: true,
      useCORS: false,
      scale: 1
    }).then(function(canvas) {
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF({
        orientation:'landscape',
        unit:'pt',
        format:'letter'});
        doc.text("Hotel la Luz", 200, 70, { align: "left" })
        doc.text("San Felipe Guanajuato", 200, 85, { align: "left" })
        doc.text("Reporte de ocupaciones", 200, 100, { align: "left" })
        doc.setFontSize(90);
      doc.addImage(img,'PNG', 150, 115, 500, 200);
      doc.save('ocupaciones.pdf');
      
    });
  }

}
