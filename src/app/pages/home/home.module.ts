import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './home.component';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import {FullCalendarModule} from 'primeng/fullcalendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {GalleriaModule} from 'primeng/galleria';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    ScrollPanelModule,
    FullCalendarModule,
    GalleriaModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule { }
