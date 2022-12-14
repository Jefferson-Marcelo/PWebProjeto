import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParcelaPipe} from "./parcela.pipe";



@NgModule({
  declarations: [ParcelaPipe],
  imports: [
    CommonModule
  ],
  exports: [ParcelaPipe]
})
export class PipesModule { }
