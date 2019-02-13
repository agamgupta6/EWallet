import { Router } from '@angular/router';
import { AccountService } from './../account.service';
import { LoginService } from './../login.service';
import { FcmService } from './../fcm.service';
import { FCM } from '@ionic-native/fcm/ngx';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  tokenfcm: string;
  authenticationError: boolean;
  password: string;
  rememberMe: boolean;
  username: string;
  credentials: any;
  account: Account;
constructor(private fcm: FCM,
  private loginService: LoginService,
  private accountService: AccountService,
  private router: Router,
  private toastController: ToastController) {

}

ngOnInit() {
  this.accountService.identity().then(account => {
      this.account = account;
  });

}

login() {

  this.loginService
      .login({
          username: this.username,
          password: this.password,
          rememberMe: this.rememberMe
      })
      .then(() => {
          this.authenticationError = false;
          console.log('login success');
          this.accountService.identity().then(account => {
            this.account = account;
            this.router.navigateByUrl('/tabs/tab1/home');
        });
          // previousState was set in the authExpiredInterceptor before being redirected to login modal.
          // since login is successful, go to stored previousState and clear previousState
      })
      .catch((error) => {
        console.log('login failed ' + JSON.stringify(error));
        this.presentToastWithOptions(error.error.detail);
          this.authenticationError = true;
      });
}

isAuthenticated() {
  return this.accountService.isAuthenticated();
}


async presentToast(message: string) {
  const toast = await this.toastController.create({
    message: message,
    duration: 2000,
    color: 'primary'
  });
  toast.present();
}

async presentToastWithOptions(message: string) {
  const toast = await this.toastController.create({
    message: message,
    showCloseButton: true,
    position: 'top',
    closeButtonText: 'close'
  });
  toast.present();
}

}
