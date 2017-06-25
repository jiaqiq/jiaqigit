import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogCenterComponent } from './dialog-center/dialog-center.component';
import { DialogRightComponent } from './dialog-right/dialog-right.component';
import { TreeComponent } from './tree/tree.component';
import { TreeService } from './tree/tree.service';
import { TreeModule, TreeNode, ButtonModule, AutoCompleteModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZtreeComponent } from './ztree/ztree.component';
import { LayerComponent } from './layer/layer.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogCenterComponent,
    DialogRightComponent,
    TreeComponent,
    ZtreeComponent,
    LayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TreeModule,
    JsonpModule,
    BrowserAnimationsModule
  ],
  providers: [TreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
