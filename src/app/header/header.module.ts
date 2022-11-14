import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NavigatorComponent } from './navigator/navigator.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MaterialExampleModule} from "../../material.module";
import {AppRoutingModule} from "../app-routing.module";
import { ShowHeaderComponent } from './show-header/show-header.component';
import {FlexModule} from "@angular/flex-layout";





@NgModule({
    declarations: [
        MenuComponent,
        NavigatorComponent,
        ShowHeaderComponent,



    ],
  exports: [
    MenuComponent,
    NavigatorComponent,
    ShowHeaderComponent,

  ],
    imports: [
        CommonModule,
        MatMenuModule,
        MatListModule,
        MaterialExampleModule,
        AppRoutingModule,
        FlexModule
    ]
})
export class HeaderModule { }
