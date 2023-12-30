import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, OrderComponent, ProductDetailComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    HomeComponent,
    //OrderComponent
  ]
})
export class AppModule { }
