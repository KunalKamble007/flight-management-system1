import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightManagementService } from '../flight-management.service';
import { SignupDetails } from '../models/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupDetails: SignupDetails = { userName: '', userPassword: '', userEmail: '', userType: 'CUSTOMER' };

  constructor(private flightManagementService: FlightManagementService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.flightManagementService.doSignup(this.signupDetails).subscribe((data) => {
      console.log(data);
      // If signup success, login with the provided login and password.
      this.flightManagementService.doLogin({ username: this.signupDetails.userName, password: this.signupDetails.userPassword }).subscribe((data) => {
        console.log(data);
        localStorage.setItem('username', this.signupDetails.userName);
        this.router.navigate(['user-home']);
      }, (error) => {
        console.log(error);
      });
    }, (error) => {
      console.log(error);
    });
  }
}
