import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PerfisAcessoComponent } from './perfis-acesso/perfis-acesso.component';
import { PerfilAcessoComponent } from './perfis-acesso/perfil-acesso/perfil-acesso.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { AuthGuard } from 'src/app/guards/auth.guard';


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
                canActivate: [AuthGuard],
                children: [
                    {
                        path: '',
                        component: PerfisAcessoComponent,
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'adicionar',
                        component: PerfilAcessoComponent,
                        canActivate: [AuthGuard]
                    }
                ]
            },
            {
                path: 'usuarios',
                canActivate: [AuthGuard],
                children: [
                    {
                        path: '',
                        component: UsuariosComponent,
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'adicionar',
                        component: UsuarioComponent,
                        canActivate: [AuthGuard]
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