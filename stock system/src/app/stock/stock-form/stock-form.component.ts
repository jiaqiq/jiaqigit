import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock.service';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../stock.service';


@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock:Stock;

  constructor(private routeInfo: ActivatedRoute, private stockService:StockService) { }

  ngOnInit() {
    this.stock = new Stock(1, '第一只股票', 1.99, 3.5, '这是第一只股票,Angular2实战股票', ['IT', '互联网']);
  }

}
