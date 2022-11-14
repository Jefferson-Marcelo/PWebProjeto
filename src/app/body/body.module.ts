import { ProductRegistrationComponent } from './product-registration/product-registration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductComponent } from './product/product.component';
import {MaterialExampleModule} from "../../material.module";
import {FormsModule} from "@angular/forms";
import {HeaderModule} from "../header/header.module";
import { ShowBodyComponent } from './show-body/show-body.component';
import {FlexModule} from "@angular/flex-layout";
import { FileUploadModule } from 'ng2-file-upload';






@NgModule({
    declarations: [
        HeaderComponent,
        ProductComponent,
        ProductRegistrationComponent,
        SidebarComponent,
        ShowBodyComponent,

    ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ProductComponent,
    ProductRegistrationComponent,
    ShowBodyComponent
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    FormsModule,
    HeaderModule,
    FlexModule,
    FileUploadModule



  ]
})
export class BodyModule { }
