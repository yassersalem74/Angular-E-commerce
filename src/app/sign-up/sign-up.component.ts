import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email : ['' ,[Validators.required ,Validators.email]],
      username: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#]).{8,}$/)]],
      confPassword: ['', Validators.required]}, { validators: this.passwordMatchValidator });
  }

  get fullName(){
    return this.registerForm.get('fullName')
  }
  get email(){
    return this.registerForm.get('email')
  }

  get username(){
    return this.registerForm.get('username')
  }

  get password(){
    return this.registerForm.get('password')
  }

  get confPassword(){
    return this.registerForm.get('confPassword')
  }

passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confPassword = control.get('confPassword');

  return password && confPassword && password.value !== confPassword.value ? { passwordMismatch: true } : null;
};

  handleSubmitForm() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      // SUBMIT FORM
    }
  }
}


