import { Component, OnInit } from '@angular/core';

// declare var $: any;

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css']
})
export class LayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".layer").click(function() {
       alert("jquery 使用");
    })
  }

}
