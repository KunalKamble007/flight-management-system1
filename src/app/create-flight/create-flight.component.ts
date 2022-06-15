import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { flight } from '../flight';
import { FlightManagementService } from '../flight-management.service';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {

  flights:flight=new flight();

  constructor(private flightService: FlightManagementService,
  private router:Router){}

  ngOnInit(): void {
  }
  saveAirport(){
    this.flightService.createFlight(this.flights).subscribe(data => {
      console.log(data);
      this.getFlightList();
    },
    error => console.log(error));
  }

  getFlightList(){
    this.router.navigate(['admin-console/flight/addFlight']);
  }

  onSubmit(){
    console.log(this.flights);
    this.saveAirport();
  }
} 