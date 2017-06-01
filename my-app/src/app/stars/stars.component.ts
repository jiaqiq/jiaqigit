import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  rating:number = 0;

  stars:boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = [];
    // i是下标, 用下标和传进来的数据比较, i大于rating返回true
    for(let i = 0; i<=5; i++){
      this.stars.push(i > this.rating);
    }
    // this.stars = [false, false, true, true, true];
  }

}
