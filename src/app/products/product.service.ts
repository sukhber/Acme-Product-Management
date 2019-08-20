import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';

@Injectable( {
    providedIn: 'root'
} )

export class ProductService {
    private productUrl: string = 'api/products/product.json';
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap( data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    };
    getProduct(id: number): Observable<IProduct | undefined> {
        return this.getProducts()
        .pipe(
            map((products: IProduct[]) => products.find( p => p.productId === id)) 
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