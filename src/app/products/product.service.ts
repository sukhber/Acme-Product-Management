import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()

export class ProductService {

    private productUrl: string = 'api/products';
    private products: IProduct[];
    
    getProducts(): Observable<IProduct[]> {
        if (this.products) {
            return of(this.products);
        }
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap( data => console.log('All: ' + JSON.stringify(data))),
            tap( data => this.products = data),
            catchError(this.handleError)
        );
    };

    getProduct(id: number): Observable<IProduct> {
        if(this.products) {
            const foundItem = this.products.find( product => product.id === id);
            if( foundItem ) 
                return of(foundItem);
        }
        const url = `${this.productUrl}/${id}`;
          return this.http.get<IProduct>(url).pipe(
            tap( data => console.log('Data: ' + JSON.stringify(data)) ),
            catchError(this.handleError)
        );
      };

      updateProduct(product: IProduct): Observable<IProduct> {
        const headers = new HttpHeaders({'Content-Type': 'application/json' });
        if ( product.id === null ) {
            return this.http.post<IProduct>(this.productUrl, product, { headers: headers}).pipe(
                tap((data) => this.products.push(data)),
                catchError(this.handleError)
            );
        }
        const url = `${this.productUrl}/${product.id}`;
        return this.http.put<IProduct>(url, product, {headers: headers}).pipe(
            catchError(this.handleError)
        );
      };

      initializeProduct(product: IProduct): void {
        product.id = null; 
        product.description = '';
        product.productCode = '';
        product.productName = '';
        product.price = null;
        product.releaseDate = '';
        product.starRating = null;
        product.imageUrl = 'assets/images/leaf_rake.png';
      }

      deleteProduct(id: number): Observable<IProduct> {
        const url = `${this.productUrl}/${id}`;
        const headers = new HttpHeaders({'Content-Type': 'application/json' });
        return this.http.delete<IProduct>(url, { headers: headers }).pipe(
            tap( () => {
                const index = this.products.findIndex( product => product.id === id);
                if( index > -1) 
                    this.products.splice(index, 1);
            }),
            catchError(this.handleError)
        );
      };

    constructor(private http: HttpClient) {};

    private handleError( err: HttpErrorResponse) {
        let errorMessage = '';

        //client-side or network error handling
        if(err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } 

        //server-side error handling
        else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return  throwError(errorMessage);
    };
}