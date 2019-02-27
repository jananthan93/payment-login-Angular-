import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPaymentInitiationComponent } from './paymentInitiation/add-payment-initiation/add-payment-initiation.component';
import { ViewPaymentInitiationComponent } from './paymentInitiation/view-payment-initiation/view-payment-initiation.component';
import { ViewPaymentComponent } from './payment/view-payment/view-payment.component';
import { AddPaymentComponent } from './payment/add-payment/add-payment.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'trainer',component:ViewPaymentInitiationComponent},
  {path:'hr',component:ViewPaymentInitiationComponent},
  {path:'accountant',component:ViewPaymentInitiationComponent},
  {path:'payment',component:AddPaymentComponent},
  {path:'paymentInitiate',component:AddPaymentInitiationComponent},
  {path:'paymentInvoice',component:ViewPaymentComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
