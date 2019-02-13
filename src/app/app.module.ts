import { MatCardModule } from '@angular/material/card';
import { AuthInterceptor } from './auth.interceptor';
import { AccountService } from './account.service';
import { SessionStorageService, LocalStorageService, NgxWebstorageModule } from 'ngx-webstorage';
import { AuthServerProvider } from './auth-jwt.service';
import { LoginService } from './login.service';
import { WalletService } from './wallet.service';
import { FcmService } from './fcm.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';
import { FCM } from '@ionic-native/fcm/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MatIconRegistry, BarcodeScanner, FCM, FcmService, WalletService,
    LoginService,
    AuthServerProvider,
    AccountService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
