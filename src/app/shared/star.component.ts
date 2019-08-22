import { Component, OnChanges, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component ( {
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
} )

export class StarComponent implements OnChanges{
    starWidth: number ;
    @Input() rating: number;
    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5 ;
    };
    @Output() ratingClicked: EventEmitter<String> = new EventEmitter<String>();
    onClick(): void {
        this.ratingClicked.emit(`The star rating ${this.rating} is clicked`);
    };
}