import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/autenticacao/login/login.component';
import { RecuperarSenhaComponent } from './pages/autenticacao/recuperar-senha/recuperar-senha.component';
import { AutoCadastroComponent } from './pages/autenticacao/auto-cadastro/auto-cadastro.component';
import { TemplateComponent } from "./components/template/template.component";
import { HomeComponent } from './pages/home/home.component';
import { NaoEncontradoComponent } from './pages/erros/nao-encontrado/nao-encontrado.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecuperarSenhaComponent,
    AutoCadastroComponent,
    TemplateComponent,
    HomeComponent,
    NaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
