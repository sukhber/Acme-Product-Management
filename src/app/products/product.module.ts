import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductParameterService } from './product-parameter.service';

@NgModule({
  declarations: [ProductListComponent, ConvertToSpacesPipe, ProductDetailComponent],
  imports: [
    SharedModule, ProductRoutingModule
  ],
  providers: [ProductParameterService]
})

export class ProductModule { }
