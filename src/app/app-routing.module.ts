import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/autenticacao/login/login.component';
import { RecuperarSenhaComponent } from './pages/autenticacao/recuperar-senha/recuperar-senha.component';
import { AutoCadastroComponent } from './pages/autenticacao/auto-cadastro/auto-cadastro.component';
import { TemplateComponent } from './components/template/template.component';
import { HomeComponent } from './pages/home/home.component';
import { NaoEncontradoComponent } from './pages/erros/nao-encontrado/nao-encontrado.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
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
    component: TemplateComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'acessos',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/acessos/acessos.module').then(
            m => m.AcessosModule
          )
      },
      {
        path: 'produtos',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/produtos/produtos.module').then(
            m => m.ProdutosModule
          )
      }
    ]
  },
  {
    path: '**',
    component: NaoEncontradoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
