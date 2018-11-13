import { Component, OnInit } from '@angular/core';
import { allResolved } from 'q';

@Component({
  selector: 'app-hacer-reservas',
  templateUrl: './hacer-reservas.component.html',
  styleUrls: ['./hacer-reservas.component.css']
})
export class HacerReservasComponent implements OnInit {

  constructor() { }

  aulas=["seleccionar","Aula con piano de cola","Aula con Clavinova","Aula con Percusión","Aula con Piano vertical","Aula con 2 Clanivovas",
  "Cubiculo con Clavinova","Cubiculo con piano vertical","Cubiculo con bateria"];

  horarios=[];
  b= this.horarios.length;

  hacerhorarios1(){
    this.horarios=[];
   for(var x=0; x<14;x++){
     var horainicial=x+6;
     var horafinal= horainicial+1;
    this.horarios.splice(x,0,horainicial+"-"+horafinal);
   }
  }

  hacerhorarios2(){
    this.horarios=[];
    for(var x=0; x<13;x=x+2){
      var horainicial=x+6;
      var horafinal= horainicial+2;
     this.horarios.splice(x,0,horainicial+"-"+horafinal);
    }
  }
  salones=[];

  a = this.salones.length;

  ngOnInit() {
  }

}
