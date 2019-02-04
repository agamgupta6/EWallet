import { MatIconRegistry } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
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
  constructor(private _formBuilder: FormBuilder,
    private iconregistry: MatIconRegistry,
    private http: HttpClient) { }

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

  addUser() {
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
    console.log(this.selectedFiles);
    const formData: FormData = new FormData();
    formData.append('details', JSON.stringify(this.firstFormGroup.value));
    formData.append('identity', JSON.stringify( this.secondFormGroup.value));
    formData.append('files', JSON.stringify( this.secondFormGroup.value));
    const headersfile = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU0OTMyMTAwMH0.KLtDpwbq95MVS8gc-lYTbcLFT3ult7uZ1nsbbvwskQWBRgs0K_H1FRMSXzbd_g2SOxLOpX_uwvuBWWHM7VAiMg',
      'sampleHeader': 'yahoooo'
  });
    // tslint:disable-next-line:max-line-length

        this.http.post('http://localhost:8080/api/imageuploaddemo', formData, {headers: headersfile}).subscribe(
          (res => {
            console.log('success ');
          }), (error => {
            console.log('error');
          })
        );
  }

  selectFile(event) {
       this.selectedFiles[event.srcElement.name] = event.target.files;
  }

}
