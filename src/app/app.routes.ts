import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { TrainSearchComponent } from './train-search.component';
import { AvailabilityComponent } from './availability.component';
import { BookingComponent } from './booking.component';
import { MyBookingsComponent } from './my-bookings.component';
import { PnrStatusComponent } from './pnr-status.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: 'search', component: TrainSearchComponent },
  { path: 'availability', component: AvailabilityComponent },

  {
    path: 'booking',
    component: BookingComponent,
    canActivate: [authGuard],
  },

  {
    path: 'bookings',
    component: MyBookingsComponent,
    canActivate: [authGuard],
  },

  {
    path: 'pnr',
    component: PnrStatusComponent,
  },

  { path: '**', redirectTo: '' },
];
