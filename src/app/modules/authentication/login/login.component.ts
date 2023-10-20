import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  loginInProgress: boolean = false;
  errorMessage: string = '';
  constructor(private authenticationService: AuthenticationService,
     private formBuilder: FormBuilder,
      private router: Router,
      ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    this.loginInProgress = true; 
    this.errorMessage = ''; 
    this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      (response) => {
        this.loginInProgress = false; 
        if (response && response.token) {
          this.authenticationService.profile().subscribe(
            (profile) => {
              console.log(profile);
              this.router.navigate(['/profile']);
            }
          )
        }
      },
      (error) => {
        console.error(error);
        this.loginInProgress = false; 
        this.errorMessage = 'Error en el inicio de sesión. Por favor, inténtalo de nuevo.';
      }
    );
  }
}
