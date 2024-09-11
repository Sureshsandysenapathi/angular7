import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-reactive.component.html',
  styleUrl: './signup-reactive.component.css'
})
export class SignupReactiveComponent {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Access to form controls
  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  // Handle form submission
  onSubmit() {
    if (this.signUpForm.valid) {
      console.log('Sign Up Data:', this.signUpForm.value);
      this.signUpForm.reset(); // Reset form after submission
    }
  }
}
