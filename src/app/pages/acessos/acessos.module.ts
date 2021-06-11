import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessosRoutingModule } from "./acessos-routing.module";

import { PerfisAcessoComponent } from './perfis-acesso/perfis-acesso.component';
import { PerfilAcessoComponent } from './perfis-acesso/perfil-acesso/perfil-acesso.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';



@NgModule({
  declarations: [
    PerfisAcessoComponent,
    PerfilAcessoComponent,
    UsuariosComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    AcessosRoutingModule
  ]
})
export class AcessosModule { }
