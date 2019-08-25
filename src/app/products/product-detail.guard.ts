import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { IProduct } from './product';

@Injectable()

export class ProductDetailGuard implements CanActivate {

  productIds: number[];

  constructor(private router: Router, private productService: ProductService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let id = +next.url[1].path;
      this.productService.getProducts().subscribe({
        next: products => this.productIds = products.map(product => product.id)
      });
      if( isNaN(id) || !this.productIds.includes(id) ) {
        alert('Invalid Product Id');
        this.router.navigate(['/products']);
        return false;
      };
      return true;
  }
  
}
