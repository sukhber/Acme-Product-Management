import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { IProduct } from './product';

@Injectable()

export class ProductDetailGuard implements CanActivate {

  products: IProduct[];
  productIds: number[];

  constructor(private router: Router, private productService: ProductService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let id = +next.url[1].path;
      this.productService.getProducts().subscribe({
        next: products => this.products = products
      });
      if (isNaN(id) || this.products === undefined) {
        return false;
      } 
        return true;
  }
}