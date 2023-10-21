import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AutheticationRoutingModule } from './authetication-routing.module';
import { AuthenticationService } from 'src/app/modules/authentication/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    CommonModule, 
    HttpClientModule,
    ReactiveFormsModule,
    AutheticationRoutingModule
  ],
  providers: [AuthenticationService],
})
export class AuthenticationModule { }
