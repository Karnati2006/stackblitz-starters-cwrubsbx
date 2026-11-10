import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],

  template: `
    <div class="home">

      <!-- Hero Section -->
      <section class="hero">

        <h1>{{ text('welcome') }}</h1>

        <p>
          {{ text('subtitle') }}
        </p>

        <a routerLink="/search" class="search-btn">
          {{ text('searchButton') }}
        </a>

      </section>

      <!-- Features Section -->
      <section class="features">

        <!-- Search Trains -->
        <div class="feature-card">
          <h2>🔎 {{ text('searchTrainsTitle') }}</h2>
          <p>{{ text('searchTrainsText') }}</p>
        </div>

        <!-- Easy Booking -->
        <div class="feature-card">
          <h2>🎫 {{ text('easyBooking') }}</h2>
          <p>{{ text('easyBookingText') }}</p>
        </div>

        <!-- PNR Status -->
        <div class="feature-card">
          <h2>📋 {{ text('pnrStatusTitle') }}</h2>
          <p>{{ text('pnrStatusText') }}</p>
        </div>

      </section>

      <!-- Footer -->
      <footer>
        © 2026 {{ text('brandName') }} |
        {{ text('footerText') }}
      </footer>

    </div>
  `,

  styles: [
    `
    .home {
      min-height: calc(100vh - 85px);
      padding: 50px 8%;
    }

    .hero {
      text-align: center;
      padding: 80px 20px;
    }

    .hero h1 {
      font-size: 48px;
      color: #123b68;
      margin-bottom: 20px;
    }

    .hero p {
      font-size: 21px;
      color: #555;
      margin-bottom: 35px;
    }

    .search-btn {
      display: inline-block;
      background: #d35400;
      color: white;
      text-decoration: none;
      padding: 16px 30px;
      border-radius: 8px;
      font-size: 18px;
      font-weight: bold;
    }

    .search-btn:hover {
      background: #a84300;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
      max-width: 1100px;
      margin: 0 auto 50px;
    }

    .feature-card {
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 5px 18px rgba(0, 0, 0, 0.1);
    }

    .feature-card h2 {
      color: #123b68;
      font-size: 22px;
    }

    .feature-card p {
      color: #555;
      font-size: 17px;
    }

    footer {
      text-align: center;
      color: #555;
      padding: 20px;
    }

    @media (max-width: 800px) {
      .hero h1 {
        font-size: 35px;
      }

      .features {
        grid-template-columns: 1fr;
      }
    }
  `,
  ],
})
export class HomeComponent {
  constructor(private languageService: LanguageService) {}

  // Get text based on the currently selected language
  text(key: string): string {
    return this.languageService.getText(key);
  }
}
