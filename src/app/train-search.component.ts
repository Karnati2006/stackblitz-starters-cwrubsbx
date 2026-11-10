import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-train-search',
  standalone: true,
  imports: [CommonModule, FormsModule],

  template: `
    <div class="page">
      <div class="search-card">
        <h1>🚆 {{ text('trainSearch') }}</h1>

        <p class="subtitle">
          {{ text('searchJourney') }}
        </p>

        <label>{{ text('fromStation') }}</label>
        <select [(ngModel)]="from">
          <option value="">{{ text('selectFrom') }}</option>
          <option>Guntur</option>
          <option>Vijayawada</option>
          <option>Hyderabad</option>
          <option>Chennai</option>
          <option>Tirupati</option>
        </select>

        <label>{{ text('toStation') }}</label>
        <select [(ngModel)]="to">
          <option value="">{{ text('selectTo') }}</option>
          <option>Guntur</option>
          <option>Vijayawada</option>
          <option>Hyderabad</option>
          <option>Chennai</option>
          <option>Tirupati</option>
        </select>

        <label>{{ text('journeyDate') }}</label>
        <input type="date" [(ngModel)]="journeyDate" />

        <button (click)="searchTrains()">
          {{ text('searchButton') }}
        </button>

        <p class="error" *ngIf="errorMessage">
          {{ errorMessage }}
        </p>
      </div>

      <div class="train-card" *ngFor="let train of trains">
        <h2>{{ train.name }} ({{ train.number }})</h2>

        <p>
          <b>{{ text('fromStation') }}:</b> {{ train.from }}
          →
          <b>{{ text('toStation') }}:</b> {{ train.to }}
        </p>

        <p>
          <b>{{ text('departure') }}:</b> {{ train.departure }}
          |
          <b>{{ text('arrival') }}:</b> {{ train.arrival }}
          |
          <b>{{ text('duration') }}:</b> {{ train.duration }}
        </p>

        <p>
          <b>{{ text('fare') }}:</b>
          {{ formatCurrency(train.fare) }}
        </p>

        <p>
          <b>{{ text('availableClasses') }}:</b>

          <span
            *ngFor="let c of train.classes"
            class="class-badge"
          >
            {{ c }}
          </span>
        </p>

        <button (click)="bookTrain(train)">
          {{ text('bookNow') }}
        </button>
      </div>
    </div>
  `,

  styles: [
    `
    .page {
      min-height: 100vh;
      padding: 40px 20px;
      background: #f4f7fb;
    }

    .search-card {
      max-width: 650px;
      margin: auto;
      background: white;
      padding: 35px;
      border-radius: 18px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    }

    h1 {
      text-align: center;
      color: #123b68;
    }

    .subtitle {
      text-align: center;
      color: #555;
      margin-bottom: 30px;
    }

    label {
      display: block;
      font-weight: bold;
      margin-top: 18px;
      margin-bottom: 8px;
    }

    select,
    input,
    button {
      width: 100%;
      padding: 14px;
      font-size: 16px;
      border-radius: 8px;
      box-sizing: border-box;
    }

    select,
    input {
      border: 1px solid #ccc;
    }

    button {
      margin-top: 25px;
      background: #d35400;
      color: white;
      border: none;
      cursor: pointer;
      font-weight: bold;
    }

    button:hover {
      opacity: 0.9;
    }

    .error {
      color: #d32f2f;
      font-weight: bold;
      margin-top: 15px;
    }

    .train-card {
      max-width: 650px;
      margin: 25px auto;
      background: white;
      padding: 25px;
      border-radius: 12px;
      border-left: 5px solid #123b68;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    }

    .class-badge {
      display: inline-block;
      margin: 5px;
      padding: 5px 10px;
      background: #e8f0f8;
      border-radius: 5px;
    }

    @media (max-width: 600px) {
      .page {
        padding: 20px 10px;
      }

      .search-card {
        padding: 20px;
      }
    }
  `,
  ],
})
export class TrainSearchComponent {
  from = '';
  to = '';
  journeyDate = '';
  trains: any[] = [];
  errorMessage = '';

  allTrains = [
    {
      name: 'Guntur Hyderabad Express',
      number: '17201',
      from: 'Guntur',
      to: 'Hyderabad',
      departure: '06:30',
      arrival: '12:30',
      duration: '6h',
      fare: 450,
      classes: ['SL', '3A', '2A'],
    },
    {
      name: 'Vijayawada Hyderabad Express',
      number: '12705',
      from: 'Vijayawada',
      to: 'Hyderabad',
      departure: '07:00',
      arrival: '12:00',
      duration: '5h',
      fare: 500,
      classes: ['SL', '3A', '2A'],
    },
    {
      name: 'Guntur Tirupati Express',
      number: '17250',
      from: 'Guntur',
      to: 'Tirupati',
      departure: '08:00',
      arrival: '14:00',
      duration: '6h',
      fare: 400,
      classes: ['SL', '3A', '2A'],
    },
    {
      name: 'Vijayawada Chennai Express',
      number: '12604',
      from: 'Vijayawada',
      to: 'Chennai',
      departure: '09:00',
      arrival: '16:00',
      duration: '7h',
      fare: 650,
      classes: ['SL', '3A', '2A'],
    },
  ];

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}

  text(key: string): string {
    return this.languageService.getText(key);
  }

  searchTrains() {
    this.errorMessage = '';
    this.trains = [];

    if (!this.from || !this.to || !this.journeyDate) {
      this.errorMessage = this.text('selectAll');
      return;
    }

    if (this.from === this.to) {
      this.errorMessage = this.text('sameStation');
      return;
    }

    this.trains = this.allTrains.filter(
      (train) => train.from === this.from && train.to === this.to
    );

    if (this.trains.length === 0) {
      this.errorMessage = this.text('noTrains');
    }
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  }

  bookTrain(train: any) {
    localStorage.setItem('selectedTrain', JSON.stringify(train));

    this.router.navigate(['/booking']);
  }
}
