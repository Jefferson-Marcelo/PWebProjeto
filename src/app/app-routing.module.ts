import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {ManipulationSystemComponent} from "./body/manipulation-system/manipulation-system.component";
import {ProductRegistrationComponent} from "./body/product-registration/product-registration.component";
import {ProductComponent} from "./body/product/product.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'cadastrarproduto',
    component: ProductRegistrationComponent
  },
  {
    path: 'listarproduto',
    component: ProductComponent
  }

];

//const routing: ModuleWithProviders = RouterModule.forRoot(routes) ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
