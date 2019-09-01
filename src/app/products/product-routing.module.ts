import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductAddComponent } from './product-add.component';
import { ProductShellComponent } from './product-shell/product-shell.component';
import { UserAccessGuard } from './user-access.guard';
import { ProductSearchComponent } from './product-search.component';

const routes: Routes = [
  { path: 'products',
    canActivate: [UserAccessGuard],
    component: ProductListComponent },
  { path: 'products/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent },
  { path: 'products/:id/edit',
    canActivate: [ProductDetailGuard],
    component: ProductEditComponent },
  { path: 'addProduct',
    canActivate: [UserAccessGuard],
    component: ProductAddComponent },
  { path: 'searchProduct',
    canActivate: [UserAccessGuard],
    component: ProductSearchComponent }
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
