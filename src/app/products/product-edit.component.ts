import { Component, OnInit } from '@angular/core';
import { IProduct, IProductResolved } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit {
  pageTitle: string = this.route.snapshot.data['pageTitle'];
  product: IProduct;
  errorMessage: '';
  constructor( private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

  ngOnInit() {
    /*const param = +this.route.snapshot.paramMap.get('id');
    if( param ) {
      const id = +param;
      this.getProduct(id);
    }*/
    this.route.data.subscribe( data => {
      const resolvedProduct: IProductResolved = data['productResolved'];
      this.product = resolvedProduct.product;
      this.errorMessage = resolvedProduct.error;
      }
    )
  }

  /*getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next : product => this.product = product, 
      error : err => this.errorMessage = err
    });
  };*/

  onCancel(): void {
    this.router.navigate(['/products']);
  };

  onSave(): void {
    this.productService.updateProduct(this.product)
    .subscribe (
      () => {
        console.log(`Product with id: ${this.product.id} updated`)});
        this.router.navigate(['/products']);
      };

  onDelete(): void {
    const param = +this.route.snapshot.paramMap.get('id');
    this.productService.deleteProduct(+this.product.id)
    .subscribe (
        () => {
          console.log(`Product with id: ${this.product.id} deleted`);
          alert('Are you sure to delete this product !!!!');
          this.router.navigate(['/products']);
        });
        
    };
}
