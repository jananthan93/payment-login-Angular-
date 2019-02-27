import { Component } from '@angular/core';
import { TokenStorageService } from './service/login/token-storage.service';
import { InteractionService } from './service/interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private token: TokenStorageService,
   
    private interactionService: InteractionService) { }
  title = 'hrm-system-frontend';
  loggedIn= 'false';
  info: any;
  role: string;
  userName: string;
  userId: number;

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.interactionService.sendUserInfo(this.info);
    this.role = this.info.authorities;
    this.userName=this.info.username;
  }
  logout() {
    this.token.signOut();
    window.location.reload();}
  // getUserIdByUserName() {
  //   this.careerDevPlanService.getUserIdByName(this.userName).subscribe(data => {
  //     // console.log(data.id);
  //     this.userId = data.id;
  //   });
  // }
}
