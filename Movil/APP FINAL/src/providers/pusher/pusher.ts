import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


declare const Pusher: any;

@Injectable()
export class PusherProvider {
  public _pusher : any;

  constructor(public http: HttpClient) {
    this._pusher = new Pusher('f7c95ae46e907460e65d', {
      cluster: 'us2',
      encrypted: true
    });
  }


  getPusher(){
    return this._pusher;
  }

}
