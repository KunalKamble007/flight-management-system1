import { Component, OnInit } from '@angular/core';
import { FlightManagementService } from 'src/app/flight-management.service';
import { Airport } from '../airport';


@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
  styleUrls: ['./airport-list.component.css']
})
export class AirportListComponent implements OnInit {

airports:Airport[] | undefined;

  constructor(private airportService:FlightManagementService) { }

  ngOnInit(): void {

    this.getAirport()
  }

  private getAirport(){

    this.airportService.getAirportList().subscribe(data=>{
      this.airports=data;
    });
  }
}
