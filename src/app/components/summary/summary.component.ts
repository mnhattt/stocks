import { Component, Input } from '@angular/core';
import { Stock } from '../../services/stocks.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  @Input() stock?: Stock

  isPositive(): boolean {
    // return this.stock?.change ? true : false
    if(this.stock && this.stock.change > 0) {
      return true
    }
    return false
  }
}
