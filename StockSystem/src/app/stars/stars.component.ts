import { Component, Input, Output, OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input()
  rating: number = 0;

  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  stars: boolean[];

  @Input()
  readonly: boolean = true;

  constructor() {

  }

  ngOnInit() {
    // this.stars = [false, false, true, true, true];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    // i是下标, 用下标和传进来的数据比较, i大于rating返回true
    for (let i = 0; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index;
      this.ratingChange.emit(this.rating);

    }

  }

}
