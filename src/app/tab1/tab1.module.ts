import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HomeWalletComponent } from './home/home-wallet/home-wallet.component';
import { HomePageModule } from './home/home.module';
import { RegisterPageModule } from './../register/register.module';
import { LoginPageModule } from './../login/login.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import {MatSelectModule} from '@angular/material/select';


import {MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule, MatInputModule, MatDialogModule, MatTableModule, MatMenuModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    MatSelectModule,
    LoginPageModule,
    FormsModule,
    RegisterPageModule,
    HomePageModule,
    MatButtonModule,
    MatTabsModule,
    CommonModule,

    MatToolbarModule,

    MatButtonModule,

    MatCardModule,

    MatInputModule,

    MatDialogModule,

    MatTableModule,

    MatMenuModule,

    MatIconModule,

    MatProgressSpinnerModule
    ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
