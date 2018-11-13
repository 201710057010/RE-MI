import { Component, OnInit } from '@angular/core';
import { usuario } from '../app.component';
import { UserListService } from '../user-list.service'

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(
    public user:UserListService
  ) { }

  
  nuevo;

  ngOnInit() {
  }


  registrar(id,email,password,password2){
    if(password == password2){  
      this.nuevo = new usuario(id,email,password);
      this.user.agregar(this.nuevo);
    }
  }
  
}
