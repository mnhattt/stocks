import { Component, OnInit } from '@angular/core';
import { Stock, StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  symbols : string[] = []

  stocks : Stock[] = []

  constructor(private stockService: StocksService) {
    this.symbols = stockService.get()
    this.stockService.load(this.symbols).subscribe(stocks => this.stocks = stocks)
  }

  ngOnInit(): void {
    this.stockService.load(this.symbols).subscribe(stocks => this.stocks = stocks)
  }
}
