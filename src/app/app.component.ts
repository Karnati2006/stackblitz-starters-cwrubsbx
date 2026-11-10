import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LanguageService, Language } from './language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  template: `
    <header class="navbar">

      <div class="logo">
      🚆 <span>{{ text('brandName') }}</span>
      </div>

      <nav>
        <a routerLink="/"
           routerLinkActive="active"
           [routerLinkActiveOptions]="{ exact: true }">
          {{ text('home') }}
        </a>

        <a routerLink="/search" routerLinkActive="active">
          {{ text('search') }}
        </a>

        <a routerLink="/bookings" routerLinkActive="active">
          {{ text('bookings') }}
        </a>

        <a routerLink="/pnr" routerLinkActive="active">
          {{ text('pnr') }}
        </a>

        <a routerLink="/login" routerLinkActive="active">
          {{ text('login') }}
        </a>

        <a routerLink="/register" routerLinkActive="active">
          {{ text('register') }}
        </a>
      </nav>

      <div class="language">
        <select
          [(ngModel)]="selectedLanguage"
          (change)="changeLanguage()"
        >
          <option value="en">English</option>
          <option value="te">తెలుగు</option>
          <option value="hi">हिन्दी</option>
        </select>
      </div>

    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
    .navbar {
      background: #123b68;
      color: white;
      padding: 18px 6%;
      display: flex;
      align-items: center;
      gap: 25px;
      flex-wrap: wrap;
    }

    .logo {
      font-size: 26px;
      font-weight: bold;
      white-space: nowrap;
    }

    nav {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-left: auto;
    }

    nav a {
      color: white;
      text-decoration: none;
      border: 1px solid #6584a5;
      padding: 9px 14px;
      border-radius: 5px;
    }

    nav a:hover,
    nav a.active {
      background: white;
      color: #123b68;
    }

    .language select {
      padding: 9px;
      border-radius: 5px;
      border: none;
      font-size: 15px;
    }

    main {
      min-height: calc(100vh - 85px);
    }

    @media (max-width: 900px) {
      .navbar {
        flex-direction: column;
        align-items: stretch;
      }

      nav {
        margin-left: 0;
        justify-content: center;
      }

      .logo {
        text-align: center;
      }
    }
  `,
  ],
})
export class AppComponent implements OnInit {
  selectedLanguage: Language = 'en';

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.loadSavedLanguage();
    this.selectedLanguage = this.languageService.getLanguage();
  }

  text(key: string): string {
    return this.languageService.getText(key);
  }

  changeLanguage() {
    this.languageService.setLanguage(this.selectedLanguage);
  }
}
