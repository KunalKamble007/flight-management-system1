import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightManagementService } from '../flight-management.service';
import { LoginDetails } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails: LoginDetails = { username: '', password: '' };

  constructor(private flightManagementService: FlightManagementService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginDetails.username !== '' && this.loginDetails.password !== '') {
      // Logic to call backend login service
      this.flightManagementService.doLogin(this.loginDetails).subscribe((data) => {
        console.log(data);
        localStorage.setItem('username', this.loginDetails.username);
        if (data.userId) {
          if (data.userType === 'ADMIN') {
            this.router.navigate(['admin-console']);
          } else if (data.userType === 'USER') {
            this.router.navigate(['user-home']);
          }
        }
      }, (error) => {
        console.log(error);
      });
    } else {
      // Display error message
    }
  }

}
