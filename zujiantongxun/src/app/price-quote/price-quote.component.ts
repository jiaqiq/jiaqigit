import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {

  stockCode: string = "IBM";

  price: number;

  @Output('priceChange') //括号里是要捕获事件的名字
  lastPrice: EventEmitter<PriceQuote> = new EventEmitter();

  @Output()
  buy: EventEmitter<PriceQuote> = new EventEmitter();  //事件发射器

  constructor() {
    setInterval(() => {
      let priceQuote: PriceQuote = new PriceQuote(this.stockCode, 100 * Math.random());

      this.price = priceQuote.lastPrice;

      this.lastPrice.emit(priceQuote); //把最新价格发射出去

    }, 1000)
  }

  buyStock(event) {
    this.buy.emit(new PriceQuote(this.stockCode, this.price));
  }              //报价只需要把价格发射出去,告诉中间人该买股票了

  ngOnInit() {
  }

}

export class PriceQuote {

  constructor(
    public stockCode: string,
    public lastPrice: number
  ) {

  }
}
