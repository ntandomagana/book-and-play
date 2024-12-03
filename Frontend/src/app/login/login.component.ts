import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
=======
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
>>>>>>> 5744ed940c77e8fa4defc13c18933992a12e7ee4

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
<<<<<<< HEAD
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
=======
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
>>>>>>> 5744ed940c77e8fa4defc13c18933992a12e7ee4
    });
  }

}
