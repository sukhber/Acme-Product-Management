import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductParameterService } from './product-parameter.service';
import { ProductService } from './product.service';
import { ProductEditComponent } from './product-edit.component';
import { ProductDetailGuard } from './product-detail.guard';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './product-data';
import { CreateProductComponent } from './create-product.component';
import { ProductShellListComponent } from './product-shell/product-shell-list.component';
import { ProductShellDetailComponent } from './product-shell/product-shell-detail.component';
import { ProductShellComponent } from './product-shell/product-shell.component';

@NgModule({
  declarations: [ProductListComponent, ConvertToSpacesPipe, ProductDetailComponent, ProductEditComponent, CreateProductComponent, ProductShellListComponent, ProductShellDetailComponent, ProductShellComponent],
  imports: [
    SharedModule, ProductRoutingModule, InMemoryWebApiModule.forRoot(ProductData)
  ],
  providers: [ProductParameterService, ProductService, ProductDetailGuard]
})

export class ProductModule { }
