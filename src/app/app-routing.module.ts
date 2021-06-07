import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/autenticacao/login/login.component';
import { RecuperarSenhaComponent } from './pages/autenticacao/recuperar-senha/recuperar-senha.component';
import { AutoCadastroComponent } from './pages/autenticacao/auto-cadastro/auto-cadastro.component';
import { TemplateComponent } from './components/template/template.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
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
    path: 'template',
    component: TemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
