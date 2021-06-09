import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './template/header/header.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { MenusComponent } from './template/sidebar/menus/menus.component';
import { FooterComponent } from './template/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MenusComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
