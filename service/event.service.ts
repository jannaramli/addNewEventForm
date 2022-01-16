import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IEvent } from '../interface/event-interface';
import { eventModel } from '../model/event-model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventFormInput: eventModel[] = JSON.parse(localStorage.getItem('addEvent') || '{}');
  eventFormModel = new BehaviorSubject(this.eventFormInput);

  // dateRange= new Date();
  // addEventForm = new BehaviorSubject(new eventModel())

  constructor() {}

  saveAddEvent(newAddEvent: any){

    let eventFormModel: IEvent = {
      eventId:newAddEvent.eventId,
      eventName:newAddEvent.eventName,
      dateStart:newAddEvent.dateStart,
      endDate:newAddEvent.endDate,
      startTime:newAddEvent.startTime,
      endTime:newAddEvent.endTime,
      kategori:newAddEvent.kategori
    }

    let eventObject = new eventModel(
      eventFormModel
    )
    
    // this.eventFormInput.push(eventObject)
    // localStorage.setItem('addEvent', JSON.stringify(this.eventFormInput))
    // this.eventFormModel.next(this.eventFormInput)

    let eventFormInput: any=[];

    if(localStorage.getItem('addEvent')){
      eventObject=JSON.parse(localStorage.getItem('addEvent') || '{}');
      eventFormInput= [newAddEvent, ...eventFormInput];
    }
    
    else{eventFormInput=[newAddEvent];}
    localStorage.setItem('addEvent', JSON.stringify(this.eventFormInput));
    // this.eventFormModel.next(this.eventFormInput)

  }

  getEvent(){
    return this.eventFormModel.asObservable()
  }

}
