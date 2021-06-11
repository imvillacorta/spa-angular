import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PerfisAcessoComponent } from './perfis-acesso/perfis-acesso.component';
import { PerfilAcessoComponent } from './perfis-acesso/perfil-acesso/perfil-acesso.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'perfis-acesso',
                pathMatch: 'full',
            },
            {
                path: 'perfis-acesso',
                children: [
                    {
                        path: '',
                        component: PerfisAcessoComponent,
                    },
                    {
                        path: 'adicionar',
                        component: PerfilAcessoComponent
                    }
                ]
            },
            {
                path: 'usuarios',
                children: [
                    {
                        path: '',
                        component: UsuariosComponent,
                    },
                    {
                        path: 'adicionar',
                        component: UsuarioComponent
                    }
                ]
            },

        ]

    }

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AcessosRoutingModule { }