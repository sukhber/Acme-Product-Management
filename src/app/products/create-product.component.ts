import { Component } from '@angular/core';
import { IProduct } from './product';
import { Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './create-product.component.html'
})
export class CreateProductComponent {

  product: IProduct;
  productIds: number[];

  constructor( private router: Router, private productService: ProductService) {
    this.product = {} as IProduct;
    productService.initializeProduct(this.product);
  }

  onSave(): void {
    this.productService.updateProduct(this.product)
    .subscribe 
    (
      () => console.log(`New Product Added`)
    );
      this.router.navigate(['/products']);
  };

  onCancel(): void {
    this.router.navigate(['/products']);
  };
}