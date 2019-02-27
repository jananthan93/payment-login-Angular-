import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentInitiationService } from 'src/app/service/payment-initiation.service';
import { PaymentInitiation } from 'src/app/model/payment-initiation.model';

@Component({
  selector: 'app-add-payment-initiation',
  templateUrl: './add-payment-initiation.component.html',
  styleUrls: ['./add-payment-initiation.component.css']
})
export class AddPaymentInitiationComponent implements OnInit {
  paymentInitiates:PaymentInitiation[];
  paymentInitiateObj=new PaymentInitiation();
  constructor(private router:Router,
    private initiatePamentService:PaymentInitiationService) { }

  ngOnInit() {

  }
  createPaymentInitiate(){
    return this.initiatePamentService.createPaymentInitiation(this.paymentInitiateObj).subscribe(data=>{
      console.log(data);
    })
  }
 
}
