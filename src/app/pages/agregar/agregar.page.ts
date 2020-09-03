import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem = '';

  constructor( private serviceDeseos: DeseosService,
               private route: ActivatedRoute ) {
    const idLista = this.route.snapshot.paramMap.get('idLista');
    this.lista = this.serviceDeseos.obtenerLista(idLista);
    console.log(this.lista);
  }

  ngOnInit() {
  }

  agrearItem(){
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = '';
    this.serviceDeseos.guardarStorage();
  }
  cambioCheck(item: ListaItem){

    const pendientes = this.lista.items.filter( datos => {
      return datos.estado === false;
    } ).length;

    if ( pendientes === 0 ){
      this.lista.fechaTermino = new Date();
      this.lista.estado = true;
    }else{
      this.lista.fechaTermino = null;
      this.lista.estado = false;
    }

    this.serviceDeseos.guardarStorage();
  }

  borrar( i: number ){
    this.lista.items.splice( i, 1 );
    this.serviceDeseos.guardarStorage();
  }

}
