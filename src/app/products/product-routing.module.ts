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
import { ProductListResolverService } from './product-list-resolver.service';
import { ProductResolverService } from './product-resolver.service';
import { ProductEditInfoComponent } from './product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit-tags.component';

const routes: Routes = [
  { path: 'products',
    canActivate: [UserAccessGuard],
    component: ProductListComponent,
    resolve: {productListResolved: ProductListResolverService} },
  { path: 'products/:id',
    //canActivate: [ProductDetailGuard],
    component: ProductDetailComponent,
    resolve: {productResolved: ProductResolverService} },
  { path: 'products/:id/edit',
    //canActivate: [ProductDetailGuard],
    component: ProductEditComponent,
    data: {pageTitle: 'Edit Product'},
    resolve: {productResolved: ProductResolverService},
    children: [
      { 
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      },
      { 
        path: 'info',
        component: ProductEditInfoComponent
      },
      { 
        path: 'tags',
        component: ProductEditTagsComponent
      }
    ] },
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
