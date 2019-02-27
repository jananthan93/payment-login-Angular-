import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Payment } from '../model/payment.model';
const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }
  private payUrl="http://localhost:8001/hrm_system/payment"
  createPayment(payment){
    return this.http.post<Payment>(this.payUrl,payment);
  }
  getpayment(){
    return this.http.get<Payment[]>(this.payUrl);
  }
  viewPayment(trainingId){
    return this.http.get<Payment>(this.payUrl+"/"+trainingId);
  }
}
