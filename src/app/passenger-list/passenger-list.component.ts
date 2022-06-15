import { Component, OnInit } from '@angular/core';
import { FlightManagementService } from '../flight-management.service';
import { passenger } from '../passenger';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {
  passenger:passenger[] | undefined;
  constructor(private passengerService: FlightManagementService) { }

  ngOnInit(): void {
    this.getpassenger()
  }


  private getpassenger(){
    this.passengerService.getpassengerList().subscribe((data: passenger[] | undefined)=> {
      this.passenger=data;
    });
  }
}
