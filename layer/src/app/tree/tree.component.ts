import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TreeModule, TreeNode } from 'primeng/primeng';
import { TreeService } from './tree.service';

import { DialogCenterComponent } from '../dialog-center/dialog-center.component';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  // msgs = [];

  trees2: TreeNode[];

  @Output()
    selectedOut:EventEmitter<Selected> = new EventEmitter();
    //  selectedOut:EventEmitter<any> = new EventEmitter();


    constructor(private treeService: TreeService) { }

    ngOnInit() {
        this.treeService.getFiles().then(trees2 => this.trees2 = trees2);
    }

    nodeSelect(event): void {
      //  this.selectedOut.emit(new Selected(event.node.id, event.node.label, event.node.data));
      this.selectedOut.emit(event.node);
    }

    // nodeSelect(event) {
    //     this.msgs = [];
    //     this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.label});
    // }

    // nodeUnselect(event) {
    //     this.msgs = [];
    //     this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
    // }


}

export class Selected {

  constructor(
    public id: number,
    public label: string,
    public data: any,
    public expandedIcon: string,
    public collapsedIcon: string,
    public children: Array<object>
  ) {

  }
}
