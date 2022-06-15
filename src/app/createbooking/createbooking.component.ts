import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../booking';
import { FlightManagementService } from '../flight-management.service';


@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.component.html',
  styleUrls: ['./createbooking.component.css']
})
export class CreatebookingComponent implements OnInit {

  booking:Booking=new Booking(0,'',0);

  constructor(private CreatebookingService: FlightManagementService,
  private router:Router){}

  ngOnInit(): void {
  }


  saveCreatebooking(){
    this.CreatebookingService.createBooking(this.booking).subscribe(data => {
      console.log(data);
      this.goToCreatebookingList();
    },
    error => console.log(error));
  }

  goToCreatebookingList(){
    this.router.navigate(['user-home/booking/createBooking']);
  }

  onSubmit(){
    console.log(this.booking);
    this.saveCreatebooking();
  }

}
