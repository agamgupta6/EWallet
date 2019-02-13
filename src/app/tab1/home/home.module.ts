import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import {MatExpansionModule} from '@angular/material/expansion'; 
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';


import {MatRippleModule} from '@angular/material/core';
import { HomeWalletComponent } from './home-wallet/home-wallet.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'home-wallet',
    component: HomeWalletComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatRippleModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatExpansionModule

  ],
  declarations: [HomePage, HomeWalletComponent]
})
export class HomePageModule {}
