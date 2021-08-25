import { Component, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { environment } from 'src/environments/environment';
import { EventsService } from 'src/app/services/events.service';
import { HomeService } from './home.service';
import { SectionsService } from './../../services/sections.service';

// import { FullCalendar } from 'primeng/fullcalendar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles: [``],
  animations: [
    trigger('popOverState', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate(800)
        // style({ opacity: 0 }),
        // animate('1500ms', style({ opacity: 1 })),
      ]),
    ])
  ]
})
export class HomeComponent implements OnInit {

  public mobile: boolean = false;

  public resources: any[] = [
  ]
  public options = {
  }
  public sections: any = []

  constructor(
    private eventsService: EventsService,
    public home: HomeService,
    public sectionsService: SectionsService
  ) { }

  ngOnInit(): void {
    this.init()
  }

  init(){
    this.sections = this.home.sections
  }

  has_section(str_section: string): boolean {
    return this.sectionsService.has_section(this.sections, str_section)
  }

  get_section_atribute(str_section: string, str_atribute: string): any{
    return this.sectionsService.get_section_atribute(this.sections, str_section, str_atribute)
  }

  con(e: any){
    console.log(e)
  }

}
