import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentInitiation } from 'src/app/model/payment-initiation.model';
import { PaymentInitiationService } from 'src/app/service/payment-initiation.service';
import { Payment } from 'src/app/model/payment.model';
import { PaymentService } from 'src/app/service/payment.service';
import { InteractionService } from 'src/app/service/interaction.service';
import { TokenStorageService } from 'src/app/service/login/token-storage.service';

@Component({
  selector: 'app-view-payment-initiation',
  templateUrl: './view-payment-initiation.component.html',
  styleUrls: ['./view-payment-initiation.component.css']
})
export class ViewPaymentInitiationComponent implements OnInit {
  paymentInitiates:PaymentInitiation[];
  paymentInitiateObj=new PaymentInitiation();
  paymentObj=new Payment();
  trainingScheduleId: any;
  payment=new Payment();
  
  
  constructor(private router:Router,private token: TokenStorageService,
    private initiatePamentService:PaymentInitiationService,private paymentService:PaymentService,
    private interactionService: InteractionService) { }
   
    info: any;
    role: string;
    userName: string;
    userId: number;
  
  
    ngOnInit() {
      this.getPaymentInitiate();
      // this.viewPayment();
      this.info = {
        token: this.token.getToken(),
        username: this.token.getUsername(),
        authorities: this.token.getAuthorities()
      };
      this.interactionService.sendUserInfo(this.info);
      this.role = this.info.authorities;
      this.userName=this.info.username;
    }
    
  getPaymentInitiate(){
    return this.initiatePamentService.getInitiatePayment().subscribe(data=>{
      this.paymentInitiates=data;
    })
  }
 
  completePayment(data){
    // this.paymentInitiateObj = Object.assign({}, data);
    // console.log( this.paymentInitiateObj)
    // this.onclickgetTrainer(data.trainer.id);
    this.paymentInitiateObj.trainer=this.trainerId;
    return this.initiatePamentService.compltePayment(this.paymentInitiateObj).subscribe(data=>{
      this.paymentInitiateObj=data;
    console.log( this.paymentInitiateObj)
      this.getPaymentInitiate();
    })
  }
  recheckPayment(data){
    // this.paymentInitiateObj = Object.assign({}, data);
    // console.log( this.paymentInitiateObj)
    // this.onclickgetTrainer(data.trainer.id);
    this.paymentInitiateObj.trainer=this.trainerId;
    return this.initiatePamentService.recheckPayment(this.paymentInitiateObj).subscribe(data=>{
      this.paymentInitiateObj=data;
    console.log( this.paymentInitiateObj)
      this.getPaymentInitiate();
    })
  }
  processPayment(data){
    this.paymentInitiateObj = Object.assign({}, data);
    this.onclickgetTrainer(data.trainer.id);
    this.paymentInitiateObj.trainer=this.trainerId;
    return this.initiatePamentService.processPayment(this.paymentInitiateObj).subscribe(data=>{
      this.getPaymentInitiate();
    })
  }
  getObject(data){
    this.paymentInitiateObj = Object.assign({}, data);
    this.onclickgetTrainer(data.trainer.id);
    this.onclickgetTraining(data.id);
    this.viewPayment();
  }
  updateInitiate(data){
    return this.initiatePamentService.editInitiatePayment(this.paymentInitiateObj).subscribe(data=>{
      this.getPaymentInitiate();
    })
  }
  trainerId:any
 onclickgetTrainer(trainer)
 {
    this.trainerId=trainer;
    console.log( this.trainerId)
 }
 onclickgetTraining(trainingSchedule)
 {
    this.trainingScheduleId=trainingSchedule;
    console.log( this.trainingScheduleId)
 }
 createPaymentInitiate(){
  this.paymentObj.trainingSchedule=this.trainingScheduleId;
  return this.paymentService.createPayment(this.paymentObj).subscribe(data=>{
    console.log(this.paymentObj);
    this.getPaymentInitiate();
    this.clear();
  })
}
viewPayment(){
  return this.paymentService.viewPayment(this.trainingScheduleId).subscribe(data=>{
    console.log(data)
    this.payment=data;
  })
}
clear(){
  this.trainingScheduleId=null;
}
}
