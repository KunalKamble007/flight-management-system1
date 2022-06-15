import { Airport } from './airport.model';



export class Schedule {
    scheduleid!: number;
    srcAirport: Airport | undefined;
    dstnAirport: Airport | undefined;
    deptDateTime!: string;
    arrDateTime!: string;
}
