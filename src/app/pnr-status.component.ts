import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-pnr-status',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page">
      <div class="pnr-card">
        <h1>🔎 {{ text('pnrStatusCheck') }}</h1>

        <p class="subtitle">
          {{ text('pnrSubtitle') }}
        </p>

        <label>{{ text('pnrNumber') }}</label>

        <input
          type="text"
          [(ngModel)]="pnrNumber"
          [placeholder]="text('enterPnr')"
        />

        <button (click)="checkPnr()">
          {{ text('checkStatus') }}
        </button>

        <p class="error" *ngIf="errorMessage">
          {{ errorMessage }}
        </p>

        <div class="result" *ngIf="booking">
          <h2>{{ text('bookingDetails') }}</h2>

          <p>
            <strong>{{ text('pnrNumber') }}:</strong>
            {{ booking.pnr }}
          </p>

          <p>
            <strong>{{ text('bookingStatus') }}:</strong>
            <span
              [class.cancelled]="booking.status === 'Cancelled'"
              class="status"
            >
              {{
                booking.status === 'Cancelled'
                  ? text('cancelled')
                  : booking.status
              }}
            </span>
          </p>

          <p>
            <strong>{{ text('train') }}:</strong>
            {{ booking.train.name }}
            ({{ booking.train.number }})
          </p>

          <p>
            <strong>{{ text('journey') }}:</strong>
            {{ booking.train.from }} → {{ booking.train.to }}
          </p>

          <p>
            <strong>{{ text('journeyDate') }}:</strong>
            {{ booking.train.date }}
          </p>

          <p>
            <strong>{{ text('class') }}:</strong>
            {{ booking.train.travelClass }}
          </p>

          <p>
            <strong>{{ text('passenger') }}:</strong>
            {{ booking.passenger.name }}
          </p>

          <p>
            <strong>{{ text('totalFare') }}:</strong>
            ₹{{ booking.totalFare }}
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .page {
      min-height: calc(100vh - 80px);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px;
      background: #f4f7fb;
    }

    .pnr-card {
      width: 100%;
      max-width: 600px;
      background: white;
      padding: 35px;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.12);
    }

    h1 {
      text-align: center;
      color: #123b68;
      margin-top: 0;
    }

    .subtitle {
      text-align: center;
      color: #666;
      margin-bottom: 25px;
    }

    label {
      display: block;
      font-weight: bold;
      margin-bottom: 7px;
    }

    input {
      width: 100%;
      padding: 13px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 16px;
      box-sizing: border-box;
    }

    button {
      width: 100%;
      padding: 14px;
      margin-top: 18px;
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
      font-weight: bold;
      text-align: center;
      margin-top: 20px;
    }

    .result {
      margin-top: 25px;
      padding: 20px;
      background: #f1f8ff;
      border-radius: 10px;
      border-left: 5px solid #123b68;
    }

    .result h2 {
      color: #123b68;
      margin-top: 0;
    }

    .status {
      color: green;
      font-weight: bold;
    }

    .status.cancelled {
      color: #d32f2f;
    }
  `,
  ],
})
export class PnrStatusComponent {
  pnrNumber = '';
  booking: any = null;
  errorMessage = '';

  constructor(private languageService: LanguageService) {}

  text(key: string): string {
    return this.languageService.getText(key);
  }

  checkPnr() {
    this.errorMessage = '';
    this.booking = null;

    if (!this.pnrNumber.trim()) {
      this.errorMessage = this.text('enterPnrError');
      return;
    }

    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');

    const foundBooking = bookings.find(
      (item: any) =>
        item.pnr.toLowerCase() === this.pnrNumber.trim().toLowerCase()
    );

    if (!foundBooking) {
      this.errorMessage = this.text('pnrNotFound');
      return;
    }

    this.booking = foundBooking;
  }
}
