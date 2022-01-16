import { IEvent } from "../interface/event-interface";

export class eventModel {
    eventId!:number;
    eventName!:String;
    dateStart!:Date;
    endDate!:Date;
    startTime!:String;
    endTime!:String;
    kategori!:String;   

    constructor(event? : IEvent){

        this.eventId= event?.eventId ?? 0;
        this.eventName= event?.eventName ?? '';
        this.dateStart= event?.dateStart ?? new Date();
        this.endDate= event?.endDate ?? new Date();
        this.startTime= event?.startTime ?? '';
        this.endTime= event?.endTime ?? '';
        this.kategori= event?.kategori ?? '';   
    }
}