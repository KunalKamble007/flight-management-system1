import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoginDetails, LoginResponse } from './models/login';
import { Observable } from 'rxjs';
import { SignupDetails } from './models/signup';
import { Airport } from './airport/airport';
import { Booking } from './booking';
import { passenger } from './passenger';
import { flight } from './flight';
import { ScheduledFlight } from './scheduled-flight.model';




@Injectable({
  providedIn: 'root'
})
export class FlightManagementService {

  userEndpoint: string = 'http://localhost:8087/user';
  private baseURL = "http://localhost:8087/airport/allairport"
  loginEndpoint: string = `${this.userEndpoint}/login`;
  private baseURL1 = "http://localhost:8087/airport/add" 
  private baseURL2 ="http://localhost:8087/booking/createBooking"
  private baseURL3= "http://localhost:8087/booking/readAllbooking"
  private baseURL4="http://localhost:8087/api/addpassenger"
  private baseURL5="http://localhost:8087/api/getAll"
  private baseURL6="http://localhost:8087/flight/allFlight"
  private baseurL7="http://localhost:8087/flight/addFlight"
  private baseurL8="http://localhost:8087/scheduledFlight/add"
  addScheduleFlight: any;

  constructor(private httpClient: HttpClient) { }

  doLogin(loginDetails: LoginDetails): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(this.loginEndpoint, loginDetails);
  }

  doLogout(username: string) {
    return this.httpClient.post(`${this.userEndpoint}/logout`, username);
  }

  doSignup(signupDetails: SignupDetails) {
    return this.httpClient.post(`${this.userEndpoint}/createUser`, signupDetails);
  }
  getAirportList():Observable<Airport[]>{
    return this.httpClient.get<Airport[]>(`${this.baseURL}`);
  }

      createAirport(airport:Airport):Observable<object>{
      return this.httpClient.post(`${this.baseURL1}`,airport);

   }
  getreadAllbooking():Observable<Booking[]>{
    return this.httpClient.get<Booking[]>(`${this.baseURL3}`);
  }

  createBooking(booking:Booking):Observable<object>{
    return this.httpClient.post(`${this.baseURL2}`,booking);
  }

  savePassengerData(data:any){
    console.log(data);
    return this.httpClient.post(`${this.baseURL4}`,data);

   
  }
  getpassengerList(): Observable<passenger[]> {
    return this.httpClient.get<passenger[]>(this.baseURL5);
    
        
}

createFlight(flights:flight):Observable<object>{
  return this.httpClient.post(`${this.baseurL7}`,flights)
}



// saveFlightData(data:any){
//   console.log(data);
//   return this.httpClient.post(`${this.baseurL7}`,data);
// }



getflightdetails(): Observable<flight[]> {
  return this.httpClient.get<flight[]>(this.baseURL6);
}




addScheduledFlight(scheduleFlight:ScheduledFlight,SrcAirport: any,dstnAirport: any,deptDateTime: any,arrDateTime: any){
  let form=new FormData();
  form.append("scheduleFlightId", String(scheduleFlight.scheduleFlightid))
  form.append("availableSeats",String(scheduleFlight.availableSeats))
  form.append("flight",String(scheduleFlight.flight))
  form.append("schedule",String(scheduleFlight.schedule));
  
  let params = new HttpParams()
  .set('srcAirport', SrcAirport)
  .set('dstnAirport', dstnAirport)
  .set('deptDateTime', deptDateTime)
  .set('arrDateTime', arrDateTime);
  console.log(scheduleFlight);
  console.log(params.toString());

  console.log(scheduleFlight);
  console.log(params.toString());



  

  return this.httpClient.post<ScheduledFlight>('http://localhost:8087/scheduledFlight/add',ScheduledFlight, {params} );

}

 
  
   
}
