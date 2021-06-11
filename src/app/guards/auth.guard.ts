import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    let usuarioLogado = localStorage.getItem('usuario');
    //SE USUARIO ESTIVER LOGADO ELE TEM ACESSO AS PAGINAS
    if (usuarioLogado) {
      return true;
    }

    //SE NÃO ESTIVER LOGADO
    this.router.navigate(['/login']);
    return false;
  }

}
