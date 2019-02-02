import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';


import {MatFormFieldModule} from '@angular/material/form-field';

import {MatButtonModule} from '@angular/material/button';

import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material';
const routes: Routes = [
  {
    path: 'register',
    component: RegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatStepperModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
