import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-product-shell-detail',
  templateUrl: './product-shell-detail.component.html'
})
export class ProductShellDetailComponent implements OnInit, OnDestroy {

  product: IProduct | null;
  subscription: Subscription;

  constructor( private productService: ProductService) {}

  ngOnInit(): void {
    this.subscription = this.productService.selectedProductChanges$.subscribe(
      product => this.product = product
    )
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  };
}
