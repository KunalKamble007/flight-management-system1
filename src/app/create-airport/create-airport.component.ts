import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airport } from '../airport/airport';
import { FlightManagementService } from '../flight-management.service';

@Component({
  selector: 'app-create-airport',
  templateUrl: './create-airport.component.html',
  styleUrls: ['./create-airport.component.css']
})
export class CreateAirportComponent implements OnInit {

  airport:Airport=new Airport();

  constructor(private airportService: FlightManagementService,
  private router:Router){}

  ngOnInit(): void {
  }
  saveAirport(){
    this.airportService.createAirport(this.airport).subscribe(data => {
      console.log(data);
      this.goToAirportList();
    },
    error => console.log(error));
  }

  goToAirportList(){
    this.router.navigate(['admin-console/airport/allairport']);
  }

  onSubmit(){
    console.log(this.airport);
    this.saveAirport();
  }

}