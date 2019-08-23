import { Component, Input, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements AfterViewInit {

  @Input() FilterOption: string;
  @Input() ListFilter: string;
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

  filterOptionChanged(): void {
    this.updatedFilterOption.emit(this.FilterOption);
  }

  listFilterChanged(): void {
    this.updatedListFilter.emit(this.ListFilter);
  }

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
}