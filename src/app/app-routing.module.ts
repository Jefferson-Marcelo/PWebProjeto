import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManipulationSystemComponent} from "./body/manipulation-system/manipulation-system.component";
import {ProductRegistrationComponent} from "./body/product-registration/product-registration.component";
import {ProductComponent} from "./body/product/product.component";

const routes: Routes = [
  {
    path: 'cadastrarproduto',
    component: ProductRegistrationComponent
  },
  /*{
    path: 'editarusuario/:id',
    component: ManipulationSystemComponent
  },*/
  {
    path: 'listarproduto',
    component: ProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
