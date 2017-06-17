import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../stock.service';


@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock: Stock;

  constructor(private routeInfo: ActivatedRoute, private stockService: StockService, private router: Router) { }

  ngOnInit() {
    let stockId = this.routeInfo.snapshot.params['id'];
    this.stockService.getStock(stockId);
  }

  cancel() {
    this.router.navigateByUrl('/stock');
  }

  save() {
console.log(this.stock.rating);
    this.router.navigateByUrl('/stock');
  }

}

