import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigurationsService } from './services/configurations.service';

import {MenubarModule} from 'primeng/menubar';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {KeyFilterModule} from 'primeng/keyfilter';
import {DropdownModule} from 'primeng/dropdown';
import { TieredMenuModule } from 'primeng/tieredmenu';
import {GalleriaModule} from 'primeng/galleria';

import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';

const primeModules = [
  MenubarModule,
  TabViewModule,
  ButtonModule,
  InputTextModule,
  KeyFilterModule,
  GalleriaModule,
  DropdownModule,
  TieredMenuModule
]
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ...primeModules
  ],
  providers: [ConfigurationsService],
  exports: [ ButtonModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
