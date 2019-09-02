import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IProductResolved } from './product';
import { Observable, of } from 'rxjs';
import { ProductService } from './product.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ProductResolverService implements Resolve<IProductResolved>{
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProductResolved> {
    const id = route.paramMap.get('id');
    if(isNaN(+id)) {
      const message = `Product id was not a number: ${id}`;
      console.error(message);
      return of({product: null, error: message});
    }
    return this.productService.getProduct(+id)
    .pipe(
      map(product => ({product: product})),
      catchError(error => {
        const message = `Retrieval error: ${error}`;
        console.error(message);
        return of({product: null, error: message});
      })
    );
  }

  constructor(private productService: ProductService) { }
}
