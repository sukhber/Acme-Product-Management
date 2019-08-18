import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './products/product-list.component'
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './products/product-list.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
