import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-home-wallet',
  templateUrl: './home-wallet.component.html',
  styleUrls: ['./home-wallet.component.scss']
})
export class HomeWalletComponent implements OnInit {
  encodedData: any;
  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

   scanQR() {
    this.barcodeScanner.scan({
      //  preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          // torchOn: true, // Android, launch with the torch switched on (if available)
          prompt : 'Place a barcode inside the scan area', // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : 'QR_CODE,PDF_417', // default: all but PDF_417 and RSS_EXPANDED
          // orientation : 'landscape', // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : false, // iOS
          disableSuccessBeep: false // iOS and Android
    }).then(barcodeData => {
      alert('Barcode data ' + barcodeData.text + 'Barcode format ' + barcodeData.format);
     }).catch(err => {
         alert('Error '  + err);
     });
   }

   createQR() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE,  this.encodedData ).then(barcodeData => {

     }).catch(err => {
         alert('Error '  + err);
     });
   }

}
