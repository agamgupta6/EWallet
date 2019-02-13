import { IWallet , Wallet} from './../wallet.model';
import { WalletService } from './../wallet.service';
import { MatIconRegistry, MatStepper } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { IUser } from '../user.model';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  selectedFiles: any = {};
  imageSuccess: any = {};
  wallet: IWallet;
  user: IUser;
  DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm';
  // tslint:disable-next-line:max-line-length
  token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU0OTgxNTc1M30.6odKCFCdPI0XgDh2j-UCbx3vhGh923x9KwTQf-tpp706n_fIqlbOAc-OoZSu3mV9LqK6LEw8DynveAskDrwEAQ';
  constructor(private _formBuilder: FormBuilder,
    private iconregistry: MatIconRegistry,
    private http: HttpClient,
    public toastController: ToastController,
    protected walletService: WalletService,
    private router: Router
    ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      mobile: ['', Validators.required],
      cedula: ['', Validators.required],
      cedulaImage: ['', Validators.required],
      faceImage: ['', Validators.required],
      addressImage: ['', Validators.required],
      signatureImage: ['', Validators.required],
    });

  }

  addUser(stepper: MatStepper) {
    console.log(this.firstFormGroup.value);
    const formData: FormData = new FormData();
    formData.append('details', JSON.stringify(this.firstFormGroup.value));
    const headersfile = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      // 'Authorization': 'Bearer ' + this.token,
      // 'sampleHeader': 'sampleHeader'
  });
    // tslint:disable-next-line:max-line-length

        this.http.post('http://192.168.0.105:8080/api/registerUser', formData,
        {headers: headersfile}).subscribe(
          (res => {
            console.log('success');
            this.user = res;
            this.presentToast('user created successfully.');
            stepper.next();
          }), (error => {
            console.log('error');
          })
        );
  }

  uploadFile(stepper: MatStepper, fileName: string) {
    console.log(this.secondFormGroup.value);
    const formData: FormData = new FormData();
    formData.append('file', this.selectedFiles[fileName][0]);
    formData.append('user', JSON.stringify(this.user));
    formData.append('fileName', fileName);

    const headersfile = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      'Authorization': 'Bearer ' + this.token,
      'sampleHeader': 'sampleHeader'
  });
    // tslint:disable-next-line:max-line-length
        this.http.post('http://192.168.0.105:8080/api/uploadIdentityImage', formData,
        {headers: headersfile}).subscribe(
          (res => {
            console.log('success');
            this.presentToast('file uloaded successfully.');
            this.imageSuccess[fileName] = true;
          }), (error => {
            console.log('error');
          })
        );
  }

  selectFile(event) {
       this.selectedFiles[event.srcElement.name] = event.target.files;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'primary'
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Click to Close',
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Done'
    });
    toast.present();
  }
  createWallet() {
    this.wallet  = new Wallet();
    this.wallet.date = moment(new Date(), this.DATE_TIME_FORMAT);
    this.wallet.user = this.user;
    this.wallet.email = this.user.email;
    this.wallet.identification = this.secondFormGroup.value['cedula'];
    this.wallet.mobile = this.secondFormGroup.value['mobile'];
    this.walletService.create(this.wallet).
    subscribe((res: HttpResponse<IWallet>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
  }
  protected onSaveSuccess() {
    this.presentToast('Wallet created successfully');
    this.router.navigateByUrl('/tabs/tab1');
}

protected onSaveError() {
  this.presentToast('Wallet could not be created');
}

gotohome() {
  this.router.navigateByUrl('/tabs/tab1');
}

}
