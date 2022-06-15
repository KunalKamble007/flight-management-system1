import { Component, OnInit } from '@angular/core';

import { flight } from '../flight';
import { FlightManagementService } from '../flight-management.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  
  flight: flight[] | undefined;

  constructor(private flightservice:FlightManagementService) { }

  ngOnInit(): void {
    this.getflight()
  }


  private getflight(){
    this.flightservice.getflightdetails().subscribe(data=> {
      this.flight=data;
    });
  }
}
