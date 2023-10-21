import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm: FormGroup
  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  signup() {
    this.authenticationService.signup(this.signUpForm.value.username, this.signUpForm.value.email, this.signUpForm.value.password).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.error(error);
      }
    )
  }
}
