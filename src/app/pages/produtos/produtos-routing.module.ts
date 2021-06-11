import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitorComponent } from './monitores/monitor/monitor.component';

import { MonitoresComponent } from './monitores/monitores.component';
import { TecladoComponent } from './teclados/teclado/teclado.component';
import { TecladosComponent } from './teclados/teclados.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'monitores',
        pathMatch: 'full',
      },
      {
        path: 'monitores',
        children: [
          {
            path: '',
            component: MonitoresComponent,
          },
          {
            path: 'adicionar',
            component: MonitorComponent
          }

        ]
      },
      {
        path: 'teclados',
        children: [
          {
            path: '',
            component: TecladosComponent,
          },
          {
            path: 'adicionar',
            component: TecladoComponent
          }

        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
