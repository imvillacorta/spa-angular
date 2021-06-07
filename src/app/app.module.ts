import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/autenticacao/login/login/login.component';
import { RecuperarSenhaComponent } from './pages/autenticacao/login/recuperar-senha/recuperar-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecuperarSenhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
