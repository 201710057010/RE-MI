import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProvider } from '../user/user';

@Injectable()
export class ListUsersProvider {
  private userList: Array<UserProvider> = new Array();

  constructor(public http: HttpClient) {
    var user = new UserProvider("Gonzalo","201710057010","admin@eafit.edu.co","Bateria","adm");
    this.addUsr(user);
  }

  addUsr(user: UserProvider){
    this.userList.push(user);
  }

  getList(){
    return this.userList;
  }

  verifUser(email: string, pass: string){
    for(let user of this.userList){
      if((email==user.getEmail()) && (pass==user.getPass())){
        return true;
      }
    }
    return false;
  }

  userRegistred(email: string){
    for(let user of this.userList){
      if(email==user.getEmail()){
        console.log(email);
        console.log(user.getEmail());
        return true;
      }
    }
    return false;
  }

  searchUser(email: string){
    for(let user of this.userList){
      if(email==user.getEmail()){
        return user;
      }
    }
    return null;
  }

}
