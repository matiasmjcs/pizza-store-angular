import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AutheticationRoutingModule } from './authetication-routing.module';
import { AuthenticationService } from 'src/app/modules/authentication/authentication.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, 
    HttpClientModule,
    ReactiveFormsModule,
    AutheticationRoutingModule
  ],
  providers: [AuthenticationService],
})
export class AuthenticationModule { }
