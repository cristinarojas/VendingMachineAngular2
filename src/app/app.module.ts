// Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ReceivingBoxComponent } from './receiving-box/receiving-box.component';
import { VendorComponent } from './vendor/vendor.component';

// Data
import productsData from './products/products.data';

// Setting the products to localStorage
localStorage.productSold = '';

if (!localStorage.products) {
  localStorage.products = JSON.stringify(productsData);
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    TransactionsComponent,
    ReceivingBoxComponent,
    VendorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
