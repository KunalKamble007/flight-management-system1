import { Flight } from "./flight.model";
import { Schedule } from "./schedule.model";


export class ScheduledFlight {
    scheduleFlightid: number | undefined;
    flight: Flight = new Flight;
    availableSeats: number | undefined;
    schedule: Schedule = new Schedule;
}
