import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
import {FormsModule}from '@angular/forms';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [UserComponent, HomeComponent, LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
