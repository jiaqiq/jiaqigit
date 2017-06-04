import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  // imgUrl: string = "http://placehold.it/400*400"
  size: number = 2;
  divClass: any = {
    a: false,
    b: false,
    c: false
  };
  divStyle: any = {
    color: 'red',
    background: 'yellow'
  };
  isBig: boolean = false;
  isDev: boolean = true;

  constructor() {
    setTimeout(() => {
      this.divStyle = {
        color: 'yellow',
        background: 'red'
      };
    }, 3000)
  }

  ngOnInit() {
  }

  doOnClick(event: any) {
    console.log(event);
  }

  doOnInput(event: any) {
    console.log(event.target.value);  //拿到dom属性  可变的
    console.log(event.target.getAttribute('value')); //拿到html属性
  }

}
