import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../booking';
import { FlightManagementService } from '../flight-management.service';


@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookings: Booking[] | undefined;

  constructor(private createbookingService: FlightManagementService,
    private router: Router  ){}

    ngOnInit(): void{
      this.getreadAllbooking();

    }
    private getreadAllbooking(){
      this.createbookingService.getreadAllbooking().subscribe(data=>{
        this.bookings=data;
    });
    }
  
    }


