import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { usuario } from '../app.component';
import { UserListService } from '../user-list.service'

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  constructor(private router:Router,
    public user: UserListService) { 
     }

  
  ngOnInit() {
  }
  
 

  // arreglo que guarda los usuarios registrados 

  usuarios = this.user.usuarios;

  // metodo para el inicio de sesion
  redireccion(contra,email){
    // se comprueba que si se hallan insertado el email y la contraseña
    if(contra != null && contra != "" && email!= null && email != ""){
      for(let i of this.usuarios){
        alert(i.email);
        // se mira que el usuario ingresado si sea el correcto
        if(email == i.email && contra == i.password){
           this.router.navigate(["ver"]); 
        }
      }
    }
  }
}

