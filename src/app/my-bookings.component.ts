import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page">
      <div class="container">
        <h1>📋 {{ text('myBookingsTitle') }}</h1>

        <div class="empty-message" *ngIf="bookings.length === 0">
          <h2>{{ text('noBookingsFound') }}</h2>
          <p>{{ text('noBookingsMessage') }}</p>
        </div>

        <div
          class="booking-card"
          *ngFor="let booking of bookings; let i = index"
        >
          <div class="booking-header">
            <div>
              <h2>{{ booking.train.name }}</h2>
              <p>
                {{ text('trainNumber') }}:
                {{ booking.train.number }}
              </p>
            </div>

            <span
              class="status"
              [class.cancelled]="booking.status === 'Cancelled'"
            >
              {{
                booking.status === 'Cancelled'
                  ? text('cancelled')
                  : booking.status
              }}
            </span>
          </div>

          <div class="booking-details">
            <p><strong>PNR:</strong> {{ booking.pnr }}</p>

            <p>
              <strong>{{ text('journey') }}:</strong>
              {{ booking.train.from }} → {{ booking.train.to }}
            </p>

            <p>
              <strong>{{ text('date') }}:</strong>
              {{ booking.train.date }}
            </p>

            <p>
              <strong>{{ text('class') }}:</strong>
              {{ booking.train.travelClass }}
            </p>

            <p>
              <strong>{{ text('passenger') }}:</strong>
              {{ booking.passenger.name }},
              {{ booking.passenger.age }} {{ text('years') }},
              {{ booking.passenger.gender }}
            </p>

            <p>
              <strong>{{ text('totalFare') }}:</strong>
              ₹{{ booking.totalFare }}
            </p>
          </div>

          <button
            *ngIf="booking.status !== 'Cancelled'"
            (click)="cancelBooking(i)"
            class="cancel-btn"
          >
            {{ text('cancelBooking') }}
          </button>

          <p
            class="cancel-message"
            *ngIf="booking.status === 'Cancelled'"
          >
            {{ text('bookingCancelledMessage') }}
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .page {
      min-height: calc(100vh - 80px);
      padding: 40px 6%;
      background: #f4f7fb;
    }

    .container {
      max-width: 900px;
      margin: auto;
    }

    h1 {
      text-align: center;
      color: #123b68;
      margin-bottom: 30px;
    }

    .booking-card,
    .empty-message {
      background: white;
      padding: 25px;
      margin-bottom: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .empty-message {
      text-align: center;
      color: #666;
    }

    .booking-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ddd;
      margin-bottom: 15px;
    }

    .booking-header h2 {
      color: #123b68;
      margin-bottom: 5px;
    }

    .booking-header p {
      color: #666;
    }

    .status {
      background: #e8f5e9;
      color: green;
      padding: 8px 14px;
      border-radius: 20px;
      font-weight: bold;
    }

    .status.cancelled {
      background: #ffebee;
      color: #d32f2f;
    }

    .booking-details {
      line-height: 1.7;
    }

    .cancel-btn {
      background: #d32f2f;
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
    }

    .cancel-message {
      color: #d32f2f;
      font-weight: bold;
    }

    @media (max-width: 600px) {
      .booking-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }
    }
  `,
  ],
})
export class MyBookingsComponent implements OnInit {
  bookings: any[] = [];

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.loadBookings();
  }

  text(key: string): string {
    return this.languageService.getText(key);
  }

  loadBookings() {
    this.bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
  }

  cancelBooking(index: number) {
    const confirmed = confirm(this.text('cancelConfirm'));

    if (!confirmed) {
      return;
    }

    this.bookings[index].status = 'Cancelled';

    localStorage.setItem('bookings', JSON.stringify(this.bookings));
  }
}
