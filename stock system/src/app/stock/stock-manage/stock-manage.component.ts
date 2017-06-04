import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock, StockService } from '../stock.service';
import { FormControl } from '@angular/forms';
import 'rxjs/RX';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks: Array<Stock>;

  private nameFilter: FormControl = new FormControl();

  private keyword: string;

  constructor(public router: Router, private stockService: StockService) { }

  ngOnInit() {

    this.stocks = this.stockService.getStocks();
    this.nameFilter.valueChanges
      .debounceTime(500)  //他的作用是让用户输入能停500ms后，解决连续输入的问题，需要导入rxjs/RX;
      .subscribe(value => this.keyword = value);

  }

  create() {
    this.router.navigateByUrl('/stock/0');

  }

  update(stock: Stock) {
    this.router.navigateByUrl('/stock/' + stock.id);

  }

}


