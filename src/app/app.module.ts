import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/autenticacao/login/login.component';
import { RecuperarSenhaComponent } from './pages/autenticacao/recuperar-senha/recuperar-senha.component';
import { AutoCadastroComponent } from './pages/autenticacao/auto-cadastro/auto-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecuperarSenhaComponent,
    AutoCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
