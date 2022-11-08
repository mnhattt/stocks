import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


let stocks: Array<string> = ['AAPL', 'GOOG', 'AMZN', 'TWTR'];
let service: string = 'https://angular2-in-action-api.herokuapp.com';

export interface Stock {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }

  get() {
    return stocks
  }

  load(symbols: string[]) {
    return this.http.get<Stock[]>(`${service}/stocks/snapshot?symbols=${symbols.join()}`)
  }
}
