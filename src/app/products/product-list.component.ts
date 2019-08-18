import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component( {
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
}

)
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 60;
    imageMargin: number = 5;
    _listFilter: string;
    showImage: boolean = false;
    buttonText: string = 'Show Image';
    filterOption: string;
    products: IProduct[] = [
        {
          "productId": 1,
          "productName": "Leaf Rake",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2019",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "assets/images/leaf_rake.png"
        },
        {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2019",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "assets/images/garden_cart.png"
        },
        {
          "productId": 5,
          "productName": "Hammer",
          "productCode": "TBX-0048",
          "releaseDate": "May 21, 2019",
          "description": "Curved claw steel hammer",
          "price": 8.9,
          "starRating": 4.8,
          "imageUrl": "assets/images/hammer.png"
        },
        {
          "productId": 8,
          "productName": "Saw",
          "productCode": "TBX-0022",
          "releaseDate": "May 15, 2019",
          "description": "15-inch steel blade hand saw",
          "price": 11.55,
          "starRating": 3.7,
          "imageUrl": "assets/images/saw.png"
        },
        {
          "productId": 10,
          "productName": "Video Game Controller",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2018",
          "description": "Standard two-button video game controller",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "assets/images/xbox-controller.png"
        }
      ];
      toggleImage(): void {
          this.showImage = !this.showImage;
          this.buttonText = this.showImage ? 'Hide Image' : 'Show Image';
      };
      ngOnInit(): void {
          console.log('In OnInit');
      };
      constructor() {
        this.filterOption = 'all';
        this.listFilter = '';
      };
      get listFilter (): string {
          return this._listFilter;
      };
      set listFilter (value: string) {
          this._listFilter = value;
      };
      filteredProducts(): IProduct[] {
        if (this.filterOption === 'all') {
            return this.products;
        } else if (this.filterOption === 'name') {
            return this.products.filter( product => product.productName.toLocaleLowerCase().indexOf( this.listFilter.toLocaleLowerCase() ) !== -1 );
        } else if (this.filterOption === 'code') {
            return this.products.filter( product => product.productCode.toLocaleLowerCase().indexOf( this.listFilter.toLocaleLowerCase() ) !== -1 );
        } else if (this.filterOption === 'availableDate') {
            return this.products.filter( product => product.releaseDate.toLocaleLowerCase().indexOf( this.listFilter.toLocaleLowerCase() ) !== -1 );
        } else if (this.filterOption === 'price') {
            return this.products.filter( product => product.price.toLocaleString().indexOf( this.listFilter ) !== -1 );
        } else if (this.filterOption === 'rating') {
            return this.products.filter( product => product.starRating.toLocaleString().indexOf( this.listFilter ) !== -1 );
        }
    };
    onRatingClicked(message: string): void {
      this.pageTitle = 'Product List ' + message;
    }
}