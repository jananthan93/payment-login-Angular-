import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/model/payment.model';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.css']
})
export class ViewPaymentComponent implements OnInit {
  paymentsList:Payment[];
  paymentObj=new Payment();
  constructor(private router:Router,
    private paymentService:PaymentService) { }

  ngOnInit() {
    this.getPayments();
  }
  getPayments(){
    return this.paymentService.getpayment().subscribe(data=>{
      this.paymentsList=data;
    })
  }
}
