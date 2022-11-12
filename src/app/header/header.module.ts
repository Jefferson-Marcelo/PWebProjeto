import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NavigatorComponent } from './navigator/navigator.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MaterialExampleModule} from "../../material.module";
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
    declarations: [
        MenuComponent,
        NavigatorComponent
    ],
  exports: [
    MenuComponent,
    NavigatorComponent
  ],
    imports: [
        CommonModule,
        MatMenuModule,
        MatListModule,
        MaterialExampleModule,
        AppRoutingModule
    ]
})
export class HeaderModule { }
