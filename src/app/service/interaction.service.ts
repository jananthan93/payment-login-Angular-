
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InteractionService {

  constructor() { }

  private loggedInSource = new Subject<string>();
 
  private userInfo = new BehaviorSubject<any>(null);
  
  loggedInSource$ = this.loggedInSource.asObservable();
 
  userInfo$ = this.userInfo.asObservable();
  

  sendLogin(loggedIn: string) {
    this.loggedInSource.next(loggedIn);
  }

  sendUserInfo(userDetails: any) {
    this.userInfo.next(userDetails);
  }
 

}
