import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategorymgmtComponent } from './admin/categorymgmt/categorymgmt.component';
import { ProductComponent } from './seller/product/product.component';
import { ShowproductsComponent } from './buyer/showproducts/showproducts.component';
import { CartComponent } from './buyer/cart/cart.component';
import { HistoryComponent } from './buyer/history/history.component';
import { RegistrationComponent } from './registration/registration.component';
//import { CategorymgmtComponent } from './categorymgmt/categorymgmt.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    BuyerComponent,
    SellerComponent,
    CategorymgmtComponent,
    ProductComponent,
    ShowproductsComponent,
    CartComponent,
    HistoryComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
