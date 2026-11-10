import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],

  template: `
    <div class="page">
      <div class="register-card">

        <!-- Title -->
        <h1>🚆 {{ text('registerTitle') }}</h1>

        <!-- Subtitle -->
        <p class="subtitle">
          {{ text('registerSubtitle') }}
        </p>

        <form (ngSubmit)="register()">

          <!-- Full Name -->
          <label>{{ text('fullName') }}</label>
          <input
            type="text"
            name="name"
            [(ngModel)]="name"
            [placeholder]="text('enterFullName')"
            required
          />

          <!-- Email -->
          <label>{{ text('email') }}</label>
          <input
            type="email"
            name="email"
            [(ngModel)]="email"
            [placeholder]="text('enterEmail')"
            required
          />

          <!-- Password -->
          <label>{{ text('password') }}</label>
          <input
            type="password"
            name="password"
            [(ngModel)]="password"
            [placeholder]="text('enterPassword')"
            required
          />

          <!-- Confirm Password -->
          <label>{{ text('confirmPassword') }}</label>
          <input
            type="password"
            name="confirmPassword"
            [(ngModel)]="confirmPassword"
            [placeholder]="text('confirmYourPassword')"
            required
          />

          <!-- Error Message -->
          <p class="error" *ngIf="errorMessage">
            {{ errorMessage }}
          </p>

          <!-- Success Message -->
          <p class="success" *ngIf="successMessage">
            {{ successMessage }}
          </p>

          <!-- Register Button -->
          <button type="submit">
            {{ text('registerButton') }}
          </button>

        </form>

        <!-- Login Link -->
        <p class="login-link">
          {{ text('alreadyAccount') }}
          <a routerLink="/login">
            {{ text('loginHere') }}
          </a>
        </p>

      </div>
    </div>
  `,

  styles: [
    `
    .page {
      min-height: calc(100vh - 85px);
      background: #f4f7fb;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px;
    }

    .register-card {
      background: white;
      width: 100%;
      max-width: 500px;
      padding: 35px;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.12);
    }

    h1 {
      text-align: center;
      color: #123b68;
      margin-top: 0;
      margin-bottom: 8px;
    }

    .subtitle {
      text-align: center;
      color: #666;
      margin-bottom: 25px;
    }

    label {
      display: block;
      font-weight: bold;
      margin-top: 15px;
      margin-bottom: 6px;
    }

    input {
      width: 100%;
      padding: 12px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 16px;
    }

    input:focus {
      outline: none;
      border-color: #123b68;
    }

    button {
      width: 100%;
      padding: 14px;
      margin-top: 25px;
      background: #d35400;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 17px;
      cursor: pointer;
    }

    button:hover {
      background: #b84400;
    }

    .error {
      color: #d32f2f;
      margin-top: 15px;
      font-weight: bold;
    }

    .success {
      color: green;
      margin-top: 15px;
      font-weight: bold;
    }

    .login-link {
      text-align: center;
      margin-top: 20px;
    }

    .login-link a {
      color: #123b68;
      font-weight: bold;
      text-decoration: none;
      margin-left: 5px;
    }

    @media (max-width: 600px) {
      .page {
        padding: 20px;
      }

      .register-card {
        padding: 25px;
      }

      h1 {
        font-size: 28px;
      }
    }
  `,
  ],
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  errorMessage = '';
  successMessage = '';

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}

  // Get text according to the currently selected language
  text(key: string): string {
    return this.languageService.getText(key);
  }

  register() {
    this.errorMessage = '';
    this.successMessage = '';

    // Check whether all fields are filled
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = this.text('fillAllFields');
      return;
    }

    // Check whether passwords match
    if (this.password !== this.confirmPassword) {
      this.errorMessage = this.text('passwordsNotMatch');
      return;
    }

    // Check password length
    if (this.password.length < 6) {
      this.errorMessage = this.text('passwordLength');
      return;
    }

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check whether email already exists
    const existingUser = users.find(
      (user: any) => user.email.toLowerCase() === this.email.toLowerCase()
    );

    if (existingUser) {
      this.errorMessage = this.text('accountExists');
      return;
    }

    // Create new user
    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    // Add and save user
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    // Display success message in selected language
    this.successMessage = this.text('registrationSuccess');

    // Redirect to login page
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1500);
  }
}
