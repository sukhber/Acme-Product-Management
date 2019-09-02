import { Component, OnInit } from '@angular/core';
import { IProduct, IProductResolved } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: '';

  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    /*
    this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getProduct(id);  
      }*/
      const resolvedProduct: IProductResolved = this.route.snapshot.data['productResolved'];
      this.product = resolvedProduct.product;
      this.errorMessage = resolvedProduct.error;
/*
    const param = +this.route.snapshot.paramMap.get('id');
    if( param ) {
      const id = +param;
      this.getProduct(id);
    }
    */
  }

  /*getProduct(id: number): void {
     this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }*/

  onBack(): void {
    this.router.navigate(['/products']);
  };
}
