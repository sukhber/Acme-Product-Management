import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter.component';

@NgModule({
  declarations: [StarComponent, FilterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StarComponent, FormsModule, CommonModule, FilterComponent
  ]
})

export class SharedModule { }
