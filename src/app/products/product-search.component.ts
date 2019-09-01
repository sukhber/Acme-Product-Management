import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './product-search.component.html'
})
export class ProductSearchComponent {

  productName: string;
  productCode: string;
  startDate: Date;
  endDate: Date;

  constructor (private router: Router) {
    this.productName = null;
    this.productCode = null;
    this.startDate = null;
    this.endDate = null;
  }

  onCancel(): void {
    this.router.navigate(['/welcome']);
  }

  onSearch(): void {
    this.router.navigate(['/products', { name: this.productName, code: this.productCode, startDate: this.startDate, endDate: this.endDate }]);
  }
}