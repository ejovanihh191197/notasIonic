import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroEstadoPipe } from './filtro-estado.pipe';



@NgModule({
  declarations: [FiltroEstadoPipe],
  imports: [
    CommonModule
  ],
  exports: [
    FiltroEstadoPipe
  ]
})
export class PipesModule { }
