import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
import { FlightManagementService } from '../flight-management.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css'],
 
})
export class PassengerDetailsComponent implements OnInit {
  
  constructor(private passenger:FlightManagementService) { }
  addPassenger=new FormGroup({
    passengerName: new FormControl(""),
    age:new FormControl(),
    uin:new FormControl(),
    luggage:new FormControl()
  })
  ngOnInit(): void {
  }
  saveData(){
    // console.log(this.addPassenger.value);
    this.passenger.savePassengerData(this.addPassenger.value).subscribe((result)=>{console.log(result)});

  }

}