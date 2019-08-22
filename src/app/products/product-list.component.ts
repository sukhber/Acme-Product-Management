import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component( {
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
}

)
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List ';
    imageWidth: number = 60;
    imageMargin: number = 5;
    _listFilter: string;
    showImage: boolean = true;
    buttonText: string = 'Hide Image';
    filterOption: string;
    ratingMessage: string;
    errorMessage: string;
    products: IProduct[];
    _filteredProducts: IProduct[];
      toggleImage(): void {
          this.showImage = !this.showImage;
          this.buttonText = this.showImage ? 'Hide Image' : 'Show Image';
      };
      ngOnInit(): void {
          this.productService.getProducts().subscribe( {
              next: products => {
                this.products = products;
              },
              error: err => {
                  this.errorMessage = err;
              } 
          } );
      };
      constructor(private productService: ProductService) {
        this.filterOption = 'all';
        this.listFilter = '';
      };
      get listFilter (): string {
          return this._listFilter;
      };
      set listFilter (value: string) {
          this._listFilter = value;
      };

      get filteredProducts (): IProduct[] {

        if (this.filterOption === 'all') {
        this._filteredProducts = this.products;
       } else if (this.filterOption === 'name') {
        this._filteredProducts = this.products.filter( product => product.productName.toLocaleLowerCase().indexOf( this.listFilter.toLocaleLowerCase() ) !== -1 );
       } else if (this.filterOption === 'code') {
        this._filteredProducts = this.products.filter( product => product.productCode.toLocaleLowerCase().indexOf( this.listFilter.toLocaleLowerCase() ) !== -1 );
       } else if (this.filterOption === 'availableDate') {
        this._filteredProducts = this.products.filter( product => product.releaseDate.toLocaleLowerCase().indexOf( this.listFilter.toLocaleLowerCase() ) !== -1 );
       } else if (this.filterOption === 'price') {
        this._filteredProducts = this.products.filter( product => product.price.toLocaleString().indexOf( this.listFilter ) !== -1 );
       } else if (this.filterOption === 'rating') {
        this._filteredProducts = this.products.filter( product => product.starRating.toLocaleString().indexOf( this.listFilter ) !== -1 );
       }
       return this._filteredProducts;
      };
      set filteredProducts (value: IProduct[]) {
          this._filteredProducts = value;
      }
    onRatingClicked(message: string): void {
        this.ratingMessage = message;
    };
}