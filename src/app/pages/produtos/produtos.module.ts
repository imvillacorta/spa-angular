import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';

import { MonitoresComponent } from './monitores/monitores.component';
import { MonitorComponent } from './monitores/monitor/monitor.component';
import { TecladosComponent } from './teclados/teclados.component';
import { TecladoComponent } from './teclados/teclado/teclado.component';




@NgModule({
  declarations: [
    MonitoresComponent,
    MonitorComponent,
    TecladosComponent,
    TecladoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
