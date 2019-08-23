import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
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
    showImage: boolean = true;
    buttonText: string = 'Hide Image';
    ratingMessage: string;
    errorMessage: string;
    products: IProduct[];
    includeDetail: boolean = true;
    filterOption: string;
    listFilter: string;
    private _filteredProducts: IProduct[];

      toggleImage(): void {
          this.showImage = !this.showImage;
          this.buttonText = this.showImage ? 'Hide Image' : 'Show Image';
      };

      ngOnInit(): void {
          this.productService.getProducts().subscribe( {
              next: products => {
                this.products = products;
                this.filteredProducts = this.products;
              },
              error: err => {
                  this.errorMessage = err;
              } 
          } );
      };
      constructor(private productService: ProductService) {
          this.listFilter = '';
          this.filterOption = 'name';
      };

    onRatingClicked(message: string): void {
        this.ratingMessage = message;
    };

    get filteredProducts(): IProduct[] {
        if(this._filteredProducts) {
            if (this.filterOption === 'all') {
                return this._filteredProducts;
            }
             else if (this.filterOption === 'name') {
                return this._filteredProducts.filter( product => product.productName.toLocaleLowerCase().indexOf( this.listFilter.toLocaleLowerCase() ) !== -1 );
            }
             else if (this.filterOption === 'code') {
                return this._filteredProducts.filter( product => product.productCode.toLocaleLowerCase().indexOf( this.listFilter.toLocaleLowerCase() ) !== -1 );
            }
             else if (this.filterOption === 'availableDate') {
                return this._filteredProducts.filter( product => product.releaseDate.toLocaleLowerCase().indexOf( this.listFilter.toLocaleLowerCase() ) !== -1 );
            }
             else if (this.filterOption === 'price') {
                return this._filteredProducts.filter( product => product.price.toLocaleString().indexOf( this.listFilter ) !== -1 );
            }
             else if (this.filterOption === 'rating') {
                return this._filteredProducts.filter( product => product.starRating.toLocaleString().indexOf( this.listFilter ) !== -1 );
            }
        } 
      };

      set filteredProducts(value: IProduct[]) {
          this._filteredProducts = value;
      };

    updateFilterOption(value: string) {
        this.filterOption = value;
    };

    updateListFilter(value: string) {
        this.listFilter = value;
    };
}





//private _sub = Subscription;
    //getSubscription: any;
/*
    private _filterInput: NgModel;

    get filterInput(): NgModel {
        return this._filterInput;
    }

    @ViewChild(NgModel, {static: false})
    set filterInput(value: NgModel) {
        this._filterInput = value;
        console.log(this.filterInput);
        if(this.filterInput && !this._sub) {
            console.log('subscribing');
            this.getSubscription = this.filterInput.valueChanges.subscribe(
                () => {
                    console.log('performed the filter');
                    //console.log(this.listFilter);
                }
            );
            this._sub = this.getSubscription;
        }
    }
*/
    