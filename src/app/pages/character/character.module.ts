import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { ButtonModule } from 'primeng/button';
import { CharacterComponent } from './character.component';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import {FullCalendarModule} from 'primeng/fullcalendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {GalleriaModule} from 'primeng/galleria';

@NgModule({
  declarations: [ CharacterComponent ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    ButtonModule,
    ScrollPanelModule,
    FullCalendarModule,
    GalleriaModule,
    ReactiveFormsModule,
  ],
})
export class CharacterModule { }
