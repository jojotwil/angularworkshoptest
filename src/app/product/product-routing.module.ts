import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './form-product/form-product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:'', component:ProductsComponent,
    children:[ {path:'addproduct', component:FormProductComponent}]
  },
  {
    path:'addproduct', component:FormProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
