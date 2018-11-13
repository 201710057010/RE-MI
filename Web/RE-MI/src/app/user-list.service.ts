import { Injectable } from '@angular/core';
import { usuario } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

   constructor() { 

   }
   
   admin = new usuario("admin","admin@eafit.edu.co","izi");

   usuarios = [this.admin];

   agregar(usuario){
    this.usuarios.splice(1,0,usuario);
   }

}
