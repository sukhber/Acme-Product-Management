import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { LoginComponent } from './home/login.component';
import { AuthorizationService } from './home/authorization.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    ProductModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
