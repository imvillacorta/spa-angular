import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/autenticacao/login/login/login.component';
import { RecuperarSenhaComponent } from './pages/autenticacao/login/recuperar-senha/recuperar-senha.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'recuperar-senha',
    component: RecuperarSenhaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
