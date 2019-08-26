import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-product-shell-list',
  templateUrl: './product-shell-list.component.html'
})
export class ProductShellListComponent implements OnInit, OnDestroy {

  pageTitle: string = 'Products';
  products: IProduct[];
  errorMessage: string = '';
  selectedProduct: IProduct | null;
  subscription: Subscription;


  constructor(private productService: ProductService) { 
    productService.getProducts().subscribe({
      next: products => this.products = products,
      error: err => this.errorMessage = err
    });
  }

  displaySelectedProduct(product: IProduct): void {
    this.productService.updateSelectedProduct(product);
  }

  ngOnInit() {
    this.subscription = this.productService.selectedProductChanges$.subscribe(
      selectedProduct => this.selectedProduct = selectedProduct
    )
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  };
}
