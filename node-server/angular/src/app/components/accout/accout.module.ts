import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccoutRoutingModule } from './accout-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccoutRoutingModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ]
})
export class AccoutModule { }
