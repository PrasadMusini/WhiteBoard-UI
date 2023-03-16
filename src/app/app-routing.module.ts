import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditboardComponent } from './editboard/editboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
      {path: 'home', component: HomeComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: '/home', pathMatch:'full'},
      {path: 'whiteboard', component: EditboardComponent},
      {path: 'notfound', component: NotfoundComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent},
      
      {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

