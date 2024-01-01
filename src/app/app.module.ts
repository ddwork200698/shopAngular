import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

@NgModule({
  declarations: [
    HomeComponent, 
    HeaderComponent, 
    FooterComponent, 
    OrderComponent, 
    ProductDetailComponent, 
    OrderConfirmComponent, 
    LoginComponent, 
    RegisterComponent, 
    DetailProductComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    // HomeComponent,
    // OrderComponent,
    // OrderConfirmComponent,
    //LoginComponent,
    // RegisterComponent,
    DetailProductComponent
  ]
})
export class AppModule { }
