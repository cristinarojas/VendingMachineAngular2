import { Component, Input } from '@angular/core';

@Component({
  selector: 'receiving-box',
  templateUrl: './receiving-box.component.html',
  styleUrls: ['./receiving-box.component.scss']
})

export class ReceivingBoxComponent {
  @Input() sold: string;
  public productSold = '';

  ngOnChanges(changes: any) {
    this.productSold = changes.sold.currentValue;
  }
}
