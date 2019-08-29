import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
import { CreateProductComponent } from './create-product.component';
import { ProductShellComponent } from './product-shell/product-shell.component';

const routes: Routes = [
  { path: 'products',   
    canActivate: [ProductDetailGuard],
    component: ProductListComponent },
  { path: 'products/:id',
    component: ProductDetailComponent },
  { path: 'products/:id/edit',
    component: ProductEditComponent },
  { path: 'addProduct',
    canActivate: [ProductDetailGuard],  
    component: CreateProductComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ProductRoutingModule { }
