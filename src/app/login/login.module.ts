import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { LogoComponent } from './logo/logo.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


import {MatChipsModule} from '@angular/material/chips'; 
const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule
  ],
  declarations: [LoginPage, LogoComponent]
})
export class LoginPageModule {}
