import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminConsoleComponent } from './admin-console/admin-console.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AirportListComponent } from './airport/airport-list/airport-list.component';
import { CreateAirportComponent } from './create-airport/create-airport.component';
import { CreatebookingComponent } from './createbooking/createbooking.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { AddScheduledFlightComponent } from './add-scheduled-flight/add-scheduled-flight.component';


// import { FlightComponent } from './create-flight/flight.component';





@NgModule({
  declarations: [
    AppComponent,
    AdminConsoleComponent,
    LoginComponent,
    SignupComponent,
    UserHomeComponent,
    AirportListComponent,
    CreateAirportComponent,
    CreatebookingComponent,
    PassengerListComponent,
    PassengerDetailsComponent,
    FlightDetailsComponent,
    BookingListComponent,
    CreateFlightComponent,
    AddScheduledFlightComponent
  
    
    

   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
