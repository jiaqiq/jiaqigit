import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import { StarsComponent } from './stars/stars.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';

import { StockService } from './stock/stock.service';
import { StockFilterPipe } from './stock/stock-filter.pipe';
import { ReactiveRegistComponent } from './reactive-regist/reactive-regist.component';




const routeConfig: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'stock', component: StockManageComponent },
  { path: 'stock/:id', component: StockFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    StockManageComponent,
    StarsComponent,
    DashboardComponent,
    StockFormComponent,
    StockFilterPipe,
    ReactiveRegistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,                          //响应式表单编程
    RouterModule.forRoot(routeConfig)
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
