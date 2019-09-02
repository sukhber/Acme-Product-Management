import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IProductListResolved } from './product';
import { Observable, of } from 'rxjs';  
import { ProductService } from './product.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ProductListResolverService implements Resolve<IProductListResolved> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProductListResolved> {
    return this.productService.getProducts()
    .pipe(
      map(products => ({products: products})),
      catchError(error => {
        const message = `Retrieval error: ${error}`;
        console.error(message);
        return of({products: null, error: message});
      })
    );
  }
  constructor(private productService: ProductService) {};
}
