import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="page">
      <div class="login-card">

        <h1>🔐 {{ text('loginTitle') }}</h1>
        <p class="subtitle">{{ text('loginSubtitle') }}</p>

        <form (ngSubmit)="login()">

          <label>{{ text('email') }}</label>
          <input
            type="email"
            name="email"
            [(ngModel)]="email"
            [placeholder]="text('enterEmail')"
            required
          />

          <label>{{ text('password') }}</label>
          <input
            type="password"
            name="password"
            [(ngModel)]="password"
            [placeholder]="text('enterPassword')"
            required
          />

          <p class="error" *ngIf="errorMessage">
            {{ errorMessage }}
          </p>

          <button type="submit">
            {{ text('loginButton') }}
          </button>
        </form>

        <p class="register-link">
          {{ text('noAccount') }}
          <a routerLink="/register">
            {{ text('registerHere') }}
          </a>
        </p>

      </div>
    </div>
  `,
  styles: [
    `
    .page {
      min-height: calc(100vh - 70px);
      background: #f4f7fb;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px;
    }

    .login-card {
      background: white;
      width: 100%;
      max-width: 450px;
      padding: 35px;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.12);
    }

    h1 {
      text-align: center;
      color: #123b68;
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

    .register-link {
      text-align: center;
      margin-top: 20px;
    }

    .register-link a {
      color: #123b68;
      font-weight: bold;
      text-decoration: none;
      margin-left: 5px;
    }

    @media (max-width: 600px) {
      .login-card {
        padding: 25px;
      }
    }
  `,
  ],
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}

  text(key: string): string {
    return this.languageService.getText(key);
  }

  login() {
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = this.text('enterEmailPassword');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find(
      (item: any) =>
        item.email === this.email && item.password === this.password
    );

    if (!user) {
      this.errorMessage = this.text('invalidLogin');
      return;
    }

    localStorage.setItem('currentUser', JSON.stringify(user));

    localStorage.setItem('isLoggedIn', 'true');

    this.router.navigate(['/']);
  }
}
