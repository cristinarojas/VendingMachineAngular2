import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public productSold = '';
  public products = '';

  onProductSold(product) { // Show the delivered item
    this.productSold = product;
  }

  onProductsUpdated(products) { // When the user buy a product we affect the quantity
    this.products = products;
  }

  onVendorProductsUpdated(products) { // When vendor add more products
    this.products = products;
  }
}
