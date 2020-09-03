import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input()
  pagTerminada = false;
  @ViewChild( IonList ) ionlist: IonList;

  constructor( public serviceLista: DeseosService,
               private router: Router,
               private alertController: AlertController ) {
  }

  ngOnInit() {}

  entrarLista( lista: Lista ){

    if (this.pagTerminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ lista.id }`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id }`);
    }
  }

  borrarLista( lista: Lista ){
    this.serviceLista.borrarLista( lista );
  }

  async editarNombreLista( item: Lista ){
    const alert = await this.alertController.create({
      header: 'Editar Nombre',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: item.titulo,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('lista cancelada');
            this.ionlist.closeSlidingItems();
          }
        },
        {
          text: 'Actualizar',
          handler: ( data ) => {
            console.log(data);
            if (data.titulo.length === 0){
              return;
            }
            item.titulo = data.titulo;
            this.serviceLista.guardarStorage();
            this.ionlist.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();

  }

}
