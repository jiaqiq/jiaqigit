import { Component } from '@angular/core';
import { PriceQuote } from './price-quote/price-quote.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // stock = "";

  priceQuote: PriceQuote = new PriceQuote("", 0);

  buyHandler(event: PriceQuote) {
    this.priceQuote = event;         //把捕获的事件传给本地的priceQuote;
  }
}
