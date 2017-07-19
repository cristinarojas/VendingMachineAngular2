import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  public amount = 0;
  public selectedProductCode = '';
  public letterCodes = ['A', 'B', 'C', 'D'];
  public showPrice = 0;
  public latestSelectedProductCode = '';
  public change = 0;
  public pending = 0;
  public quantity = '';
  // Loading prodcuts from local storage
  public products = JSON.parse(localStorage.products);

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Output() notifyUpdateProducts: EventEmitter<string> = new EventEmitter<string>();

  addMoney() {
    this.amount += 1;
    this.selectedProductCode = '';
    this.quantity = '';
  }

  selectProduct(value) {
    // Limit code to 2 characters
    if (this.selectedProductCode.length < 2) {
      // Validating the first click
      if (this.selectedProductCode.length === 0) { // is the first element?
        // Validating first letter
        if (this.letterCodes.indexOf(value) !== -1) { // is letter?
          this.selectedProductCode = value;
        }
      } else {
        if (!isNaN(value)) {
          this.selectedProductCode += value;
          this.latestSelectedProductCode = this.selectedProductCode;
          this.change = 0;
          this.pending = 0;
          this.quantity = '';

          // Initializing transaction
          if (this.amount === 0) {
            this.showPrice = this.getProduct(this.selectedProductCode).price; // The price
            this.selectedProductCode = '';
          } else {
            const currentProduct = this.getProduct(this.selectedProductCode);
            const productPrice = currentProduct.price;
            const productQuantity = currentProduct.quantity;

            // Transaction success!
            if (productQuantity > 0 && this.amount > productPrice || this.amount === productPrice) {
              this.change = this.amount - productPrice;
              this.amount = 0;
              this.showPrice = 0;
              this.quantity = '';

              // We decrease (-1) the quantity of the product
              this.updateProduct(this.selectedProductCode);

              // Notifying to receiving box component
              this.notify.emit(currentProduct.name);

              // Notifying to products (Updating products object)
              this.notifyUpdateProducts.emit(localStorage.products);
            } else if (productPrice > this.amount) {
              this.pending = productPrice - this.amount;
            } else {
              this.quantity = 'Sold out';
            }

            this.selectedProductCode = '';
          }
        }
      }
    }
  }

  getProduct(selectedProductCode) {
    const letter = selectedProductCode[0]; // A
    const index = selectedProductCode[1] - 1; // 1
    const products = JSON.parse(localStorage.products); // string to object
    const position = this.letterCodes.indexOf(letter);

    // Filling up the product
    return products[position].products[index];
  }

  updateProduct(selectedProductCode) {
    const letter = selectedProductCode[0]; // A
    const index = selectedProductCode[1] - 1; // 1
    const products = JSON.parse(localStorage.products); // string to object
    const position = this.letterCodes.indexOf(letter);

    // Filling up the product
    products[position].products[index].quantity -= 1;

    // Saving the products to localStorage
    localStorage.products = JSON.stringify(products);
  }
}
