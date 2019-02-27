import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { PaymentInitiation } from '../model/payment-initiation.model';

const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class PaymentInitiationService {

  constructor(private http:HttpClient) { }

  private initiateUrl="http://localhost:8001/hrm_system/paymentInitiate";

  getInitiatePayment(){
    return this.http.get<PaymentInitiation[]>(this.initiateUrl);
  }
  editInitiatePayment(paymentIni){
    return this.http.put<PaymentInitiation>(this.initiateUrl+"/"+paymentIni.id,paymentIni);
  }
  processPayment(paymentIni){
    return this.http.put<PaymentInitiation>(this.initiateUrl+"/"+"process"+"/"+paymentIni.id,paymentIni);
  }
  recheckPayment(paymentIni){
    return this.http.put<PaymentInitiation>(this.initiateUrl+"/"+"recheck"+"/"+paymentIni.id,paymentIni);
  }
  compltePayment(paymentIni){
    return this.http.put<PaymentInitiation>(this.initiateUrl+"/"+"complete"+"/"+paymentIni.id,paymentIni);
  }
  createPaymentInitiation(initiatePayment){
    return this.http.post<PaymentInitiation>(this.initiateUrl,initiatePayment);
  }
}
