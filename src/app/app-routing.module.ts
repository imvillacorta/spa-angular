import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/autenticacao/login/login.component';
import { RecuperarSenhaComponent } from './pages/autenticacao/recuperar-senha/recuperar-senha.component';
import { AutoCadastroComponent } from './pages/autenticacao/auto-cadastro/auto-cadastro.component';
import { TemplateComponent } from './components/template/template.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'recuperar-senha',
    component: RecuperarSenhaComponent
  },
  {
    path: 'auto-cadastro',
    component: AutoCadastroComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'acessos',
        loadChildren: () =>
          import('./pages/acessos/acessos.module').then(
            m => m.AcessosModule
          )
      },
      {
        path: 'produtos',
        loadChildren: () =>
          import('./pages/produtos/produtos.module').then(
            m => m.ProdutosModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
