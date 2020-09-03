import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  lista: Lista[] = [];

  constructor() {
    this.cargarStorage();
  }

  agregarLista( titulo: string ){
    const lista = new Lista( titulo );
    this.lista.push(lista);
    this.guardarStorage();
    return lista.id;
  }

  obtenerLista( id: string | number ){
    id = Number(id);
    return this.lista.find( dataLista => {
      return dataLista.id === id;
    });
  }

  borrarLista( lista: Lista) {
    this.lista = this.lista.filter( lData => {
      return lData.id !== lista.id;
    });
    this.guardarStorage();
  }

  guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.lista));
  }

  cargarStorage(){
    if ( JSON.parse(localStorage.getItem('data')) ){
      this.lista = JSON.parse(localStorage.getItem('data'));
    }else{
      this.lista = [];
    }
  }

}
