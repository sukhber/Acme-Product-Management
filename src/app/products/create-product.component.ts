import { Component } from '@angular/core';
import { IProduct } from './product';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../home/authorization.service';

@Component({
  templateUrl: './create-product.component.html'
})
export class CreateProductComponent {
  

  product: IProduct;
  isLoggedIn: boolean;
  
  constructor( private router: Router, private productService: ProductService, private authorizationService: AuthorizationService) {
    //authorizationService.isLoggedInChanges$.subscribe(
      //isLoggedIn => this.isLoggedIn = isLoggedIn
    //);
    //if (this.isLoggedIn) {
      this.product = {} as IProduct;
      productService.initializeProduct(this.product);
   // } else {
      //alert('Kindly login to continue !!!!!');
      //this.router.navigate(['/welcome']);
    //}
    
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
}