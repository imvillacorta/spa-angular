import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  perfisAcesso() {
    this.router.navigate([
      '/acessos/perfis-acesso'
    ])
  }

  usuarios() {
    this.router.navigate([
      '/acessos/usuarios'
    ])
  }

  monitores() {
    this.router.navigate([
      '/produtos/monitores'
    ])
  }

  teclados() {
    this.router.navigate([
      '/produtos/teclados'
    ])
  }

}
