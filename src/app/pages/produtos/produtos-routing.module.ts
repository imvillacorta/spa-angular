import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
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
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: MonitoresComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'adicionar',
            component: MonitorComponent,
            canActivate: [AuthGuard]
          }

        ]
      },
      {
        path: 'teclados',
        children: [
          {
            path: '',
            component: TecladosComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'adicionar',
            component: TecladoComponent,
            canActivate: [AuthGuard]
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
