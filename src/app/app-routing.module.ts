import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddScheduledFlightComponent } from './add-scheduled-flight/add-scheduled-flight.component';
import { AdminConsoleComponent } from './admin-console/admin-console.component';
import { AirportListComponent } from './airport/airport-list/airport-list.component';
import { BookingListComponent } from './booking-list/booking-list.component';

import { CreateAirportComponent } from './create-airport/create-airport.component';
import { CreateFlightComponent } from './create-flight/create-flight.component';

//import { FlightComponent } from './create-flight/flight.component';


import { CreatebookingComponent } from './createbooking/createbooking.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';




import { LoginComponent } from './login/login.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { SignupComponent } from './signup/signup.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [{
  path: 'admin-console',
  component: AdminConsoleComponent
}, 




{path: '', component: LoginComponent}, 

  {path: 'signup', component: SignupComponent}, 
 {path: 'user-home',component: UserHomeComponent},


{path: 'user-home/airport/allairport',component: AirportListComponent},
 {path: 'admin-console/airport/add',component: CreateAirportComponent},


 {path:`user-home/booking/createBooking`, component: CreatebookingComponent},
 {path:`admin-console/booking/readAllbooking`, component: BookingListComponent},


  {path:'user-home/api/addpassenger',component:PassengerDetailsComponent},
  {path:'admin-console/api/getAll',component:PassengerListComponent},


  {path:'user-home/flight/allFlight', component: FlightDetailsComponent},
  // {path:'admin-console/flight/addFlight', component: FlightComponent},


  {path:`admin-console/flight/addFlight`, component: CreateFlightComponent},


  {path:`admin-console/scheduledFlight/add`, component: AddScheduledFlightComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
