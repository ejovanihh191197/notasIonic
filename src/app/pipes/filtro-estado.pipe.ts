import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroEstado',
  pure: false
})
export class FiltroEstadoPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true): Lista[] {
    return listas.filter( listaData => {
      return listaData.estado === completada;
    });
  }

}
