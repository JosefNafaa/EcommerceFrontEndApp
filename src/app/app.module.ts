import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {ProductService} from './services/product.service';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    ContactFormComponent,
    SearchComponent 
  ],
  imports: [
    BrowserModule,   
    AppRoutingModule,
    HttpClientModule
  ], 
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
