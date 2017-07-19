import { Component, Input } from '@angular/core';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() updatedProducts: string;
  public products = JSON.parse(localStorage.products);

  ngOnChanges(changes: any) {
    if (changes.updatedProducts.currentValue) {
      this.products = JSON.parse(changes.updatedProducts.currentValue);
    }
  }
}
