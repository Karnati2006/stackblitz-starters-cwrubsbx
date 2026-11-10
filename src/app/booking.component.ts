import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="page">
      <div class="booking-card">

        <h1>🎫 Ticket Booking</h1>

        <div class="train-info" *ngIf="selectedTrain">
          <h2>{{ selectedTrain.name }} ({{ selectedTrain.number }})</h2>
          <p><b>Journey:</b> {{ selectedTrain.from }} → {{ selectedTrain.to }}</p>
          <p><b>Date:</b> {{ selectedTrain.date }}</p>
          <p><b>Class:</b> {{ selectedTrain.travelClass }}</p>
          <p><b>Fare per Passenger:</b> ₹{{ selectedTrain.fare }}</p>
        </div>

        <form [formGroup]="bookingForm" (ngSubmit)="confirmBooking()">

          <label>Passenger Name</label>
          <input
            type="text"
            formControlName="name"
            placeholder="Enter passenger name"
          />
          <small
            class="error"
            *ngIf="bookingForm.get('name')?.invalid &&
                   bookingForm.get('name')?.touched"
          >
            Please enter passenger name.
          </small>

          <label>Age</label>
          <input
            type="number"
            formControlName="age"
            placeholder="Enter age"
          />
          <small
            class="error"
            *ngIf="bookingForm.get('age')?.invalid &&
                   bookingForm.get('age')?.touched"
          >
            Enter a valid age.
          </small>

          <label>Gender</label>
          <select formControlName="gender">
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <small
            class="error"
            *ngIf="bookingForm.get('gender')?.invalid &&
                   bookingForm.get('gender')?.touched"
          >
            Please select gender.
          </small>

          <div class="fare-box">
            <strong>Total Ticket Fare: ₹{{ totalFare }}</strong>
          </div>

          <button type="submit">Confirm Booking</button>
        </form>

        <div class="confirmation" *ngIf="bookingConfirmation">
          <h2>✅ Booking Confirmed!</h2>
          <p><b>Your PNR Number:</b> {{ bookingConfirmation.pnr }}</p>
          <p>Passenger: {{ bookingConfirmation.passenger.name }}</p>
          <p>Train: {{ bookingConfirmation.train.name }}</p>
          <p><b>Total Fare: ₹{{ bookingConfirmation.totalFare }}</b></p>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .page {
      min-height: calc(100vh - 80px);
      padding: 40px 20px;
      background: #f4f7fb;
    }

    .booking-card {
      max-width: 650px;
      margin: auto;
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.12);
    }

    h1 {
      text-align: center;
      color: #123b68;
    }

    .train-info {
      background: #e8f0f8;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 25px;
    }

    .train-info h2 {
      color: #123b68;
      margin-top: 0;
    }

    label {
      display: block;
      margin-top: 15px;
      margin-bottom: 6px;
      font-weight: bold;
    }

    input, select {
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 16px;
    }

    .error {
      color: #d32f2f;
      display: block;
      margin-top: 5px;
    }

    .fare-box {
      margin-top: 25px;
      padding: 15px;
      background: #fff3e0;
      border-radius: 8px;
      color: #b84400;
      font-size: 18px;
    }

    button {
      width: 100%;
      margin-top: 20px;
      padding: 14px;
      background: #d35400;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 17px;
      cursor: pointer;
    }

    .confirmation {
      margin-top: 25px;
      padding: 20px;
      background: #e8f5e9;
      border-radius: 8px;
      border-left: 5px solid green;
    }

    .confirmation h2 {
      color: green;
    }
  `]
})
export class BookingComponent implements OnInit {

  selectedTrain: any;
  totalFare = 0;
  bookingConfirmation: any = null;

  bookingForm;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      gender: ['', Validators.required]
    });
  }

  ngOnInit() {
    const trainData = localStorage.getItem('selectedTrain');

    if (!trainData) {
      alert('Please select a train first.');
      this.router.navigate(['/search']);
      return;
    }

    this.selectedTrain = JSON.parse(trainData);
    this.totalFare = this.selectedTrain.fare;
  }

  confirmBooking() {

    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();
      return;
    }

    const pnr = 'PNR' + Date.now().toString().slice(-8);

    const booking = {
      pnr: pnr,
      train: this.selectedTrain,
      passenger: this.bookingForm.value,
      totalFare: this.totalFare,
      status: 'Confirmed',
      bookedOn: new Date().toLocaleString()
    };

    const bookings = JSON.parse(
      localStorage.getItem('bookings') || '[]'
    );

    bookings.push(booking);

    localStorage.setItem('bookings', JSON.stringify(bookings));

    this.bookingConfirmation = booking;

    // Clear selected train after successful booking
    localStorage.removeItem('selectedTrain');
  }
}