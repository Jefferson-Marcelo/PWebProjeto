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
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {PipesModule} from "../shared/pipes/pipes.module";
import {MatBadgeModule} from "@angular/material/badge";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";





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
      FlexModule,
      AppRoutingModule,
      MatIconModule,
      MatInputModule,
      MatMenuModule,
    ]
})
export class HeaderModule { }
