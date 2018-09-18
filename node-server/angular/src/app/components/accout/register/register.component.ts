import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'app/services/register.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private register: RegisterService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  public onRegisterSubmit(playload: any) {
    if(typeof playload === 'object') {
      this.register.register(playload).subscribe((data) => {
        if(data.success){
          this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/login']);
        } else {
          this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/register']);
        }
      })
    }else {
      this.flashMessage.show('Is not Objects', {cssClass: 'alert-danger', timeout: 3000});
      this.router.navigate(['/register']);
    }
  }
}
