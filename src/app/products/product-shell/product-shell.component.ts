import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';


@Component({
  templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit, OnDestroy {

  monthCount: number;
  subscription: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.subscription = this.productService.selectedProductChanges$.subscribe(
      product => {
        if(product) {
          const start = new Date(product.releaseDate);
          const now = new Date();
          this.monthCount = now.getMonth() - start.getMonth() + 12*(now.getFullYear() - start.getFullYear());
        } else {
          this.monthCount = 0;
        }
      });
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  };
}
