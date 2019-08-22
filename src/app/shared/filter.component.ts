import { Component, OnInit, Input, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit, AfterViewInit {

  @Input() FilterOption: string;
  @Input() ListFilter: string;
  @Input() hitCount: number;

  @Output() updatedFilterOption: EventEmitter<string> = new EventEmitter<string>();
  @Output() updatedListFilter: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('filterElement', {static: false}) filterElementReference: ElementRef;

  onListFilterChange(): void {
    this.updatedListFilter.emit(this.ListFilter);
  }

  onFilterOptionChange(): void {
    this.updatedFilterOption.emit(this.FilterOption);
  }

  constructor() { }

  ngOnInit() {
  };

  ngAfterViewInit(): void {
    this.filterElementReference.nativeElement.focus();
};

}
