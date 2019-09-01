import { Injectable } from '@angular/core';

@Injectable()
export class ProductParameterService {

  showImage: boolean = true;
  includeDetail: boolean = true;
  filterOption: string = 'none';
  listFilter: string = '';

  constructor() { }
}
