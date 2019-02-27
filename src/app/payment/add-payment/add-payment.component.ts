import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/model/payment.model';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {
  paymentsList:Payment[];
  paymentObj=new Payment();
  constructor(private router:Router,
    private paymentService:PaymentService) { }

  ngOnInit() {

  }
  createPaymentInitiate(){
    return this.paymentService.createPayment(this.paymentObj).subscribe(data=>{
      console.log(data);
    })
  }

}
