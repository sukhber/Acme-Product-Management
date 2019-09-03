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
import { ProductAddComponent } from './product-add.component';
import { ProductShellListComponent } from './product-shell/product-shell-list.component';
import { ProductShellDetailComponent } from './product-shell/product-shell-detail.component';
import { ProductShellComponent } from './product-shell/product-shell.component';
import { UserAccessGuard } from './user-access.guard';
import { ProductSearchComponent } from './product-search.component';
import { ProductListResolverService } from './product-list-resolver.service';
import { ProductResolverService } from './product-resolver.service';
import { ProductEditInfoComponent } from './product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit-tags.component';

@NgModule({
  declarations: [ProductListComponent, ConvertToSpacesPipe, ProductDetailComponent, ProductEditComponent, ProductAddComponent, ProductShellListComponent, ProductShellDetailComponent, ProductShellComponent, ProductSearchComponent, ProductEditInfoComponent, ProductEditTagsComponent],
  imports: [
    SharedModule, ProductRoutingModule, InMemoryWebApiModule.forRoot(ProductData)
  ],
  providers: [ProductParameterService, ProductService, ProductDetailGuard, UserAccessGuard, ProductListResolverService, ProductResolverService]
})

export class ProductModule { }
