import { Injectable } from '@angular/core';
import { Event } from '../interfaces/event'

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private _events: Event[] = [] as Event[]

  constructor() { }

  get events(){
    return this._events
  }

  get_events(){
    this._events = [
      {
        id: 1,
        title: 'Charity Online Curriculum in Schematherapy for Children and Adolescents (ST-CA)',
        start: '2021-06-29',
        therapists: [
          { id: 1, name: 'Dr. Christof Loose'}
        ]
      },
      {
        id: 1,
        title: 'Charity Online Curriculum in Schematherapy for Children and Adolescents (ST-CA)',
        start: '2021-07-15',
        therapists: [
          { id: 1, name: 'Dr. Christof Loose'}
        ]
      },
      {
        id: 2,
        title: 'Online Workshop 2a: Schema Therapy for Borderline Presentations',
        start: '2021-07-24',
        therapists: [
          { id: 2, name: 'Dr Gillian Heath'},
          { id: 3, name: 'Dr Tara Cutland Green'}
        ]
      },
      {
        id: 3,
        title: 'Online Workshop 2c: Schema Therapy: working with Narcissism',
        start: '2021-07-27',
        therapists: [
          { id: 2, name: 'Dr Gillian Heath'},
          { id: 3, name: 'Dr Tara Cutland Green'}
        ]
      },
      {
        id: 3,
        title: 'Online Workshop 2c: Schema Therapy: working with Narcissism',
        start: '2021-08-01',
        therapists: [
          { id: 2, name: 'Dr Gillian Heath'},
          { id: 3, name: 'Dr Tara Cutland Green'}
        ]
      },
    ]
    return new Promise<Event[]>((resolve, reject) => {
      resolve(this._events)
    })
  }

}
