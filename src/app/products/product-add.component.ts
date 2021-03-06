import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { Router } from '@angular/router';
import { ProductService } from './product.service';
import { AuthorizationService } from '../home/authorization.service';

@Component({
  templateUrl: './product-add.component.html'
})
export class ProductAddComponent implements OnInit{

  product: IProduct;
  dataIsValid: boolean = false;
  //isLoggedIn: boolean;
  
  constructor( private router: Router, private productService: ProductService, private authorizationService: AuthorizationService) {
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

  ngOnInit(): void {
  };

  validate(): boolean {
    if (!this.product.productName || !this.product.productCode || !this.product.releaseDate || !this.product.price) {
      this.dataIsValid = false;
    } else {
      this.dataIsValid = true;
    }
    return this.dataIsValid;
  };
}