import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product';

@Component({
  selector: 'pm-product-shell-list',
  templateUrl: './product-shell-list.component.html'
})
export class ProductShellListComponent implements OnInit {

  pageTitle: string = 'Products';
  products: IProduct[];
  errorMessage: string = '';

  constructor(private productService: ProductService) { 
    productService.getProducts().subscribe({
      next: products => this.products = products,
      error: err => this.errorMessage = err
    });
  }

  displaySelectedProduct(product: IProduct): void {
    this.productService.currentProduct = product;
  }

  ngOnInit() {
  }

}
