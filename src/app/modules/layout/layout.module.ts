import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from './sidebar/sidebar.module';
import { HeaderModule } from './header/header.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    HeaderModule
  ],
  exports: [
    SidebarModule,
    HeaderModule
  ]
})
export class LayoutModule { }
