import { Component, Input, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements AfterViewInit {

  @Input() displayDetail: boolean;
  @Output() updatedFilterOption: EventEmitter<string> = new EventEmitter<string>();
  @Output() updatedListFilter: EventEmitter<string> = new EventEmitter<string>();

  private _hitCount: number;

  get hitCount(): number {
    return this._hitCount;
  };

  @Input()
  set hitCount(value: number) {
    this._hitCount = value;
  };
  
  @ViewChild('filterElement', {static: false}) filterElementReference: ElementRef;

  ngAfterViewInit(): void {
    this.filterElementReference.nativeElement.focus();
  };

  get hitMessage(): string {
    if (!this.hitCount) {
      return 'No Matches Found';
    } else {
      return `Hits: ${this.hitCount}`;
    }
  };

  private _ListFilter: string;
  
  get ListFilter(): string {
    return this._ListFilter;
  };

  @Input()
  set ListFilter(value: string) {
    this._ListFilter = value;
    this.updatedListFilter.emit(value);
  };

  private _FilterOption: string ;

  get FilterOption(): string {
    return this._FilterOption;
  };

  @Input()
  set FilterOption(value: string) {
    this._FilterOption = value;
    this.updatedFilterOption.emit(value);
  };
}