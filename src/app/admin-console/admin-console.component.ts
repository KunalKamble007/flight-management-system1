import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightManagementService } from '../flight-management.service';

@Component({
  selector: 'app-admin-console',
  templateUrl: './admin-console.component.html',
  styleUrls: ['./admin-console.component.css']
})
export class AdminConsoleComponent implements OnInit {
  username: string = JSON.stringify(localStorage.getItem('username'));

  constructor(private flightManagementSevice: FlightManagementService, private router: Router) { }

  ngOnInit(): void {
  }

  doLogout() {

    this.flightManagementSevice.doLogout(this.username).subscribe(data => {
      console.log(data);
      // Logout the user and remove username from localstorage
      localStorage.setItem('username', '');
      this.router.navigate(['']);

    }, error => {
      console.log(error);
    });

  }
}
