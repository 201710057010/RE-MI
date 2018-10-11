import { Injectable } from '@angular/core';

@Injectable()
export class SalonProvider {
  codigo;
  tipo;
  instrumento;

  constructor(codigo:string,tipo:string,instrumento:string) {
    this.codigo = codigo;
    this.tipo = tipo;
    this.instrumento = instrumento;
  }
}
