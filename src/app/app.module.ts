import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddPaymentComponent } from './payment/add-payment/add-payment.component';
import { ViewPaymentComponent } from './payment/view-payment/view-payment.component';
import { AddPaymentInitiationComponent } from './paymentInitiation/add-payment-initiation/add-payment-initiation.component';
import { ViewPaymentInitiationComponent } from './paymentInitiation/view-payment-initiation/view-payment-initiation.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPaymentInitiationComponent,
    ViewPaymentInitiationComponent,
    AddPaymentComponent,
    ViewPaymentComponent,
    LoginComponent
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
