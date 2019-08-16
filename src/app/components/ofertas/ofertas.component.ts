import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../../services/oferta.service';
import { NgForm } from '@angular/forms';
import { Oferta } from 'src/app/models/oferta';


declare var M: any;
@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  providers: [OfertaService]
})
export class OfertasComponent implements OnInit {

  constructor(public ofertaService: OfertaService) { }

  ngOnInit() {
    this.getOfertas();
  }

  addOferta(form: NgForm) {
    if(form.value._id){
      this.ofertaService.putOferta(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Update Successfuly'});
          this.getOfertas();
        })
    }else{
      this.ofertaService.postOferta(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Save Successfuly'});
        this.getOfertas();
      });
    }
 }

 getOfertas(){
    this.ofertaService.getOfertas()
        .subscribe(res =>{
          this.ofertaService.ofertas = res as Oferta[];
          console.log(res);
    });
}

editOferta(oferta: Oferta){
  this.ofertaService.selectedOferta = oferta;
}
deleteOferta(_id: string){
  if(confirm("are you sure want to delete it??")){
    this.ofertaService.deleteOferta(_id)
    .subscribe(res =>{
      this.getOfertas();
      M.toast({html: "Delete Successfully"});
    });
    
  }


}


  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.ofertaService.selectedOferta = new Oferta();
    }
  }

}
