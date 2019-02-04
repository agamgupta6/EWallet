import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  deviceToken: any;
  constructor() { }
  setDeviceToken(token) {
    this.deviceToken = token;
  }

  getDeviceToken(): any {
    return this.deviceToken;
  }
}
