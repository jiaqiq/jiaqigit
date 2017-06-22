import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogLeftComponent } from './dialog-left/dialog-left.component';
import { DialogCenterComponent } from './dialog-center/dialog-center.component';
import { DialogRightComponent } from './dialog-right/dialog-right.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogLeftComponent,
    DialogCenterComponent,
    DialogRightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
