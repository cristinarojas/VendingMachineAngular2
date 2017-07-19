import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})

export class VendorComponent {
  public show = false;
  // Loading prodcuts from local storage
  public products = JSON.parse(localStorage.products);
  public selectedProduct = '';

  @Input() updatedProducts: string;
  @Output() notifyUpdatingSlot: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: any) {
    if (changes.updatedProducts.currentValue) {
      this.products = JSON.parse(changes.updatedProducts.currentValue);
    }
  }

  onChange(selectValue) {
    this.selectedProduct = selectValue;
  }

  fillProducts() {
    const positions = ['A', 'B', 'C', 'D'];
    const letter = this.selectedProduct[0];
    const index = this.selectedProduct[1];
    const newProducts = JSON.parse(localStorage.products);

    // Filling up the product
    newProducts[positions.indexOf(letter)].products[index].quantity = 10;

    // Saving the products to localStorage
    localStorage.products = JSON.stringify(newProducts);

    this.products = newProducts;
    this.notifyUpdatingSlot.emit(localStorage.products);
  }
}
