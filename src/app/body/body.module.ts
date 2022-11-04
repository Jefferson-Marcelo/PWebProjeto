import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductComponent } from './product/product.component';
//import { ProductRegistrationComponent } from './product-registration/product-registration.component';
import {MaterialExampleModule} from "../../material.module";
import {FormsModule} from "@angular/forms";
import { ManipulationSystemComponent } from './manipulation-system/manipulation-system.component';



@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        ProductComponent,
        ///ProductRegistrationComponent,
        ManipulationSystemComponent
    ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    FormsModule
  ]
})
export class BodyModule { }
