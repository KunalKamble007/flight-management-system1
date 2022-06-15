import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Airport } from '../airport.model';

import { FlightManagementService } from '../flight-management.service';
import { Flight } from '../flight.model';
import { Schedule } from '../schedule.model';
import { ScheduledFlight } from '../scheduled-flight.model';




@Component({
  selector: 'app-add-scheduled-flight',
  templateUrl: './add-scheduled-flight.component.html',
  styleUrls: ['./add-scheduled-flight.component.css']
})
export class AddScheduledFlightComponent implements OnInit {

  srcAirport: string | undefined;
  dstnAirport: string | undefined;
  //SrcAirport:SrcAirport;
  deptDateTime: string | undefined;
  arrDateTime: string | undefined;
  A1:Airport;

  scheduleFlight:ScheduledFlight={
    scheduleFlightid: 0, availableSeats: 0,
    flight: new Flight,
    schedule: new Schedule
  };
  idValid: any;
  
  constructor(private scheduleFlightService: FlightManagementService, private router: Router, private route: ActivatedRoute) {
    this.A1=new Airport();
    //this.SrcAirport:new SrcAirport();
  }
    

  ngOnInit(): void {
  }

  addScheduleFlight(scheduleFlight: any,sa: string | undefined,da: string | undefined,ddt: string | undefined,adt: string | undefined){
     
     this.srcAirport=sa;
     this.dstnAirport=da;
     this.deptDateTime=ddt;
     this.arrDateTime=adt;
     this.scheduleFlightService.addScheduleFlight( scheduleFlight,sa,da,ddt,adt).subscribe();
     alert("Schedule Flight added");
   }

   /*addScheduleFlight(scheduleFlight,sa,da,ddt,adt){
     scheduleFlight.schedule.srcAirport =sa;
     scheduleFlight.schedule.dstnAirport=da;
     scheduleFlight.schedule.deptDateTime=ddt;
     scheduleFlight.schedule.arrDateTime=adt;
     this.scheduleFlightService.addScheduleFlight(scheduleFlight).subscribe(data => console.log(data));
     alert("Schedule Flight added");
   }*/
  //  idValid:boolean=false;
  //   validateId(){
  //       if(this.scheduleFlight.scheduleFlightid>999){
  //           this.idValid=true;
  //       }
  //       else if(this.scheduleFlight.scheduleFlightid<1){
  //           this.idValid=true;
  //       }else{
  //           this.idValid=false;
  //       }
  //   }

    airportValid:boolean=false;
    validateAirports(a:string, b:string){
        if(a.toLowerCase()===b.toLowerCase()){
            this.airportValid=true;
            console.log("value of A"+a);
        //console.log("value of B"+b);
        }else{
            this.airportValid=false;
        }
        this.enableButton();

        //
  }

  buttonFlag:boolean=false;
    enableButton(){
        this.buttonFlag=!this.idValid&&!this.airportValid;
    }

    add(){

      this.router.navigate(['/scheduledFlight/add']);

  }


}
