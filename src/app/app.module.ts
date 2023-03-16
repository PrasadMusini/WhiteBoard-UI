import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { EditboardComponent } from './editboard/editboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModuleDecorator } from '@angular/core';




@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    EditboardComponent,
    NotfoundComponent,
    ForgotPasswordComponent,
    RegistrationComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgModule,
    RouterModule,
    
    
   
  ],
  // exports :[NgModuleDecorator],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
