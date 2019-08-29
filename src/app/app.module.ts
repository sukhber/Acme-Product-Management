import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { ProductModule } from './products/product.module';
import { FormsModule } from '@angular/forms';
import { UserAccessModule } from './home/user-access.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    ProductModule,
    FormsModule,
    UserAccessModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
