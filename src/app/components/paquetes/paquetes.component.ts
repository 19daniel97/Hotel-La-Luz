import { Component, OnInit } from '@angular/core';
import { PaqueteService } from '../../services/paquete.service';
import { NgForm } from '@angular/forms';
import { Paquete } from 'src/app/models/paquete';
import { Subscriber } from 'rxjs';


declare var M: any;
@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css'],
  providers: [PaqueteService]
})
export class PaquetesComponent implements OnInit {

  constructor(public paqueteService: PaqueteService ) { }

  ngOnInit() {
    this.getPaquetes();
  }

  addPaquete(form: NgForm) {
    if(form.value._id){
      this.paqueteService.putPaquete(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Update Successfuly'});
          this.getPaquetes();
        })
    }else{
      this.paqueteService.postPaquete(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Save Successfuly'});
        this.getPaquetes();
      });
    }
 }

  getPaquetes(){
    this.paqueteService.getPaquetes()
        .subscribe(res =>{
          this.paqueteService.paquetes = res as Paquete[];
          console.log(res);
    });
}

editPaquete(paquete: Paquete){
  this.paqueteService.selectedPaquete = paquete;
}
deletePaquete(_id: string){
  if(confirm("are you sure want to delete it??")){
    this.paqueteService.deletePaquete(_id)
    .subscribe(res =>{
      this.getPaquetes();
      M.toast({html: "Delete Successfully"});
    });
    
  }


}


  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.paqueteService.selectedPaquete = new Paquete();
    }
  }

}
