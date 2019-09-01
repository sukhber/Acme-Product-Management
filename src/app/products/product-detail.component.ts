import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;
  errorMessage: '';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getProduct(id);  
      }
    );
/*
    const param = +this.route.snapshot.paramMap.get('id');
    if( param ) {
      const id = +param;
      this.getProduct(id);
    }
    */
  }

  getProduct(id: number): void {
     this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  };
}
