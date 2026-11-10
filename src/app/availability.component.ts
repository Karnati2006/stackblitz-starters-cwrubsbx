import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-availability',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page">
      <div class="container">
        <h1>🚆 Available Trains</h1>

        <div class="journey-info">
          <strong>Journey:</strong> {{ from }} → {{ to }}
          <br>
          <strong>Date:</strong> {{ date }}
        </div>

        <div class="train-card" *ngFor="let train of trains">
          <div class="train-title">
            <div>
              <h2>{{ train.name }}</h2>
              <p>Train Number: <strong>{{ train.number }}</strong></p>
            </div>
          </div>

          <div class="train-details">
            <div>
              <strong>Departure</strong>
              <p>{{ train.departure }}</p>
            </div>

            <div>
              <strong>Arrival</strong>
              <p>{{ train.arrival }}</p>
            </div>

            <div>
              <strong>Duration</strong>
              <p>{{ train.duration }}</p>
            </div>

            <div>
              <strong>Starting Fare</strong>
              <p>₹{{ train.fare }}</p>
            </div>
          </div>

          <div class="class-section">
            <strong>Select Travel Class:</strong>

            <div class="class-buttons">
              <button
                *ngFor="let travelClass of train.classes"
                (click)="selectClass(train, travelClass)"
              >
                {{ travelClass }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page {
      min-height: calc(100vh - 80px);
      padding: 40px 6%;
      background: #f4f7fb;
    }

    .container {
      max-width: 1000px;
      margin: auto;
    }

    h1 {
      text-align: center;
      color: #123b68;
    }

    .journey-info {
      background: #e8f0f8;
      padding: 18px;
      border-radius: 8px;
      margin: 25px 0;
      line-height: 1.8;
    }

    .train-card {
      background: white;
      padding: 25px;
      margin-bottom: 25px;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    .train-title h2 {
      color: #123b68;
      margin-bottom: 5px;
    }

    .train-title p {
      color: #666;
      margin-top: 0;
    }

    .train-details {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      padding: 18px 0;
      margin: 15px 0;
    }

    .train-details div {
      text-align: center;
    }

    .train-details p {
      margin-bottom: 0;
      color: #d35400;
      font-weight: bold;
    }

    .class-section {
      margin-top: 20px;
    }

    .class-buttons {
      display: flex;
      gap: 12px;
      margin-top: 12px;
    }

    .class-buttons button {
      padding: 10px 22px;
      background: #d35400;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
    }

    .class-buttons button:hover {
      background: #b84400;
    }

    @media (max-width: 700px) {
      .train-details {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `]
})
export class AvailabilityComponent implements OnInit {

  from = '';
  to = '';
  date = '';

  // Dummy train data required by the assignment
  trains = [
    {
      name: 'Godavari Express',
      number: '12727',
      departure: '06:00',
      arrival: '12:30',
      duration: '6h 30m',
      fare: 350,
      classes: ['SL', '3A', '2A']
    },
    {
      name: 'Charminar Express',
      number: '12760',
      departure: '10:30',
      arrival: '17:45',
      duration: '7h 15m',
      fare: 420,
      classes: ['SL', '3A', '2A']
    },
    {
      name: 'Simhadri Express',
      number: '17239',
      departure: '15:00',
      arrival: '22:00',
      duration: '7h',
      fare: 390,
      classes: ['SL', '3A', '2A']
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.from = params['from'] || 'Not Selected';
      this.to = params['to'] || 'Not Selected';
      this.date = params['date'] || 'Not Selected';
    });
  }

  selectClass(train: any, travelClass: string) {
    let finalFare = train.fare;

    // Calculate fare according to travel class
    if (travelClass === '3A') {
      finalFare = train.fare * 2;
    } else if (travelClass === '2A') {
      finalFare = train.fare * 3;
    }

    // Save selected train temporarily
    localStorage.setItem(
      'selectedTrain',
      JSON.stringify({
        ...train,
        travelClass: travelClass,
        fare: finalFare,
        from: this.from,
        to: this.to,
        date: this.date
      })
    );

    // Booking page will be protected by Route Guard
    this.router.navigate(['/booking']);
  }
}