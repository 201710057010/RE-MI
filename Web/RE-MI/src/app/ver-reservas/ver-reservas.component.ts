import { Component, OnInit } from '@angular/core';
import { reserva } from '../app.component';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-ver-reservas',
  templateUrl: './ver-reservas.component.html',
  styleUrls: ['./ver-reservas.component.css']
})
export class VerReservasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  x = 1;

  rem =[];

  reservas = [new reserva("29-305","Eduard","20171","10-12","",""),new reserva("29-302","Eduard","20171","12-2","",""),
  new reserva("29-306","gonzalo","20172","10-12","",""),new reserva("30-305","Jhon","20173","10-12","",""),new reserva("29-305","Jhon","20173","10-12","","")];

  buscadas = [];

  buscar(aula){
    this.buscadas =[];
    for(let i of this.reservas){
       if (i.aula == aula){
          this.buscadas.splice(1,0,i);
       }
    }
  }

  eliminarReserva(aula,nombre,horario){
    for(let i of this.reservas){
      if (i.aula != aula || i.nombre !=nombre || i.horario != horario){
         this.rem.splice(1,0,i);
      }
      this.x++;
    }
    this.x= 0;
    this.reservas=this.rem;
    for(let i of this.buscadas){
       if(i.aula == aula){
        this.buscadas.splice(this.x,1);
       }
    }
    this.x =0;
  }
}

