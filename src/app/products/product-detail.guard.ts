import { CanActivate, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { AuthorizationService } from '../home/authorization.service';

/*
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { IProduct } from './product';
import { AuthorizationService } from '../home/authorization.service';

@Injectable()

export class ProductDetailGuard implements CanActivate {

  products: IProduct[];
  productIds: number[];
  isLoggedIn: boolean | null;

  constructor(private router: Router, private productService: ProductService, authorizationService: AuthorizationService) {
    authorizationService.isLoggedInChanges$.subscribe(
      isLoggedIn => this.isLoggedIn = isLoggedIn
    );
  };

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let id = +next.url[1].path;
      this.productService.getProducts().subscribe({
        next: products => this.products = products
      });
      if (this.isLoggedIn === false) {
        alert('Kindly log into the application');
        this.router.navigate(['/welcome']);
        return false;
      }
      if (isNaN(id) || this.products === undefined) {
        return false;
      } 
        return true;
  }
}
*/

export class ProductDetailGuard implements CanActivate {
  token: boolean;
  constructor(
      private _router: Router,
      private data: AuthorizationService
      
  ) {}

  canActivate(): Observable < boolean > {
       this.data.isLoggedInChanges$.subscribe(
        token => this.token = token
      );
      if (this.token) {
          return of(this.token);
      } else {
          return of(this.token);
      }
  }
}