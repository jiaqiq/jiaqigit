import { Component, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/primeng';
import { Selected } from '../tree/tree.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

selected: Selected = new Selected(null, "", "", "", "", [{}, {}]);

  constructor() { }

  ngOnInit() {
  }

  // 函数接受子函数传递过来的变量
     recSelected(event) {
        this.selected = event;
     }

}
