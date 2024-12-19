import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';
import { FormProductComponent } from './form-product/form-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategorieService } from '../core/categorie.service';


@NgModule({
  declarations: [
    ProductsComponent,
    FormProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
 
})
export class ProductModule { }
