import { Component, OnInit, Input } from '@angular/core';
import { PriceQuote } from '../price-quote/price-quote.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  // @Input()
  // stockCode: string;  //买的股票代码
  // @Input()
  // amount: number;     //买的股票数量

  @Input()
  priceQuote: PriceQuote;

  constructor() {

  }

  ngOnInit() {

  }

}
