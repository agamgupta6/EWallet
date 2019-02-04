import { FcmService } from './fcm.service';
import { FCM } from '@ionic-native/fcm/ngx';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  tokenfcm: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    private fcmService: FcmService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // notification
      this.fcm.subscribeToTopic('marketing');

      this.fcm.getToken().then(token => {
        // backend.registerToken(token);
        console.log(token);
        this.tokenfcm = token;
      });

      this.fcm.onNotification().subscribe(data => {
        if (data.wasTapped) {
          alert('yahoooooooooo');
          console.log('Received in background');
        } else {
          alert('data tapped false');
          console.log('Received in foreground');
        }
        this.fcmService.setDeviceToken(data['title']);
      });

      this.fcm.onTokenRefresh().subscribe(token => {
        // backend.registerToken(token);
      });
      // notification
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
