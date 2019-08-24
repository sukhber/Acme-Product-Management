import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit {
  pageTitle: string = 'Edit Product';
  product: IProduct;
  errorMessage: '';
  constructor( private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

  ngOnInit() {
    const param = +this.route.snapshot.paramMap.get('id');
    if( param ) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next : product => this.product = product, 
      error : err => this.errorMessage = err
    });
  };

  onCancel(): void {
    this.router.navigate(['/products']);
  };

  onSave(): void {
    this.productService.updateProduct(this.product)
    .subscribe((data)=>{
      console.log(`Product with id: ${this.product.id} updated`)});
      this.router.navigate(['/products']);
  };

  onDelete(): void {
    const param = +this.route.snapshot.paramMap.get('id');
      this.productService.deleteProduct(+this.product.id)
        .subscribe((data)=>{
        console.log(`Product with id: ${this.product.id} deleted`)});
      this.router.navigate(['/products']);
  };
}
