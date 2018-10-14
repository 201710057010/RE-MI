import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { usuario } from '../app.component';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  constructor(private router:Router) { }

  
  ngOnInit() {
  }
  

  admin = new usuario("admin","admin@eafit.edu.co","izi");

  // arreglo que guarda los usuarios registrados
  usuarios=[this.admin];   

  // metodo para el inicio de sesion
  redireccion(contra,email){
    // se comprueba que si se hallan insertado el email y la contraseña
    if(contra != null && contra != "" && email!= null && email != ""){
      for(let i of this.usuarios){
        // se mira que el usuario ingresado si sea el correcto
        if(email == i.email && contra == i.password){
           this.router.navigate(["ver"]); 
        }
      }
    }
  }

  agregarUsuario(usuario){
    this.usuarios.splice(1,0,usuario);
  }

}

