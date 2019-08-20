import { Component, OnInit } from '@angular/core';
import { ReservacionComponent } from '../../reservacion/reservacion.component';
import { ReservacionService } from '../../../services/reservacion.service';
import { Reservacion } from '../../../models/reservacion';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-reservacionusuario',
  templateUrl: './reservacionusuario.component.html',
  styleUrls: ['./reservacionusuario.component.css'],
  providers: [ ReservacionService ]
})
export class ReservacionusuarioComponent implements OnInit {

  constructor(public reservacionService: ReservacionService) { }

  ngOnInit() {
    this.getReservaciones();
  }

  getReservaciones() {
    this.reservacionService.getReservaciones()
      .subscribe(res => {
        this.reservacionService.reservaciones = res as Reservacion[];
      });
    }

    generarPDF(){
     var id = document.getElementById("tabMensaje");
     var pdf = new jsPDF ('1', 'pt', 'letter'); 
    // var img = new Image();
     //img
     var pdf = new jsPDF({
     orientation:'landscape',
     unit:'pt',
     format:'carta'
    
      });
      
      
      pdf.text("Hotel la luz", 200, 70, { align: "left" })
      pdf.text("San Felipe Guanajuato", 200, 85, { align: "left" })
      pdf.text("Comprovante de reservacion", 200, 100, { align: "left" })
      pdf.setFontSize(200);
      pdf.fromHTML(id, 80, 200);
     
      //pdf.fromHTML(id,60,100);
      //pdf.text(30, 30, 'hcbdsj', null, 90);
      pdf.save("Redservacion.pdf");
      pdf.addPage('a3', 'portrait');
    }


}
