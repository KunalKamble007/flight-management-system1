import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { FlightManagementService } from '../flight-management.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  username: string = JSON.stringify(localStorage.getItem('username'));

  constructor(private flightManagementService: FlightManagementService,private router:Router) {}

  ngOnInit(): void {

  }

  doLogout() {
    this.flightManagementService.doLogout(this.username).subscribe(data =>{
      console.log(data);

      localStorage.setItem('username','');
      this.router.navigate(['']);
    }, error => {
      console.log(error);
    
  });


  }

}
