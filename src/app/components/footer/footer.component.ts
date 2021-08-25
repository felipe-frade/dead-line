import { FooterService } from './footer.service';
import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SectionsService } from 'src/app/services/sections.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  styles: [``]
})
export class FooterComponent implements OnInit {

  public sections: any = []

  constructor(private formBuilder: FormBuilder,
              public countriesService: CountriesService,
              public footer: FooterService,
              public sectionsService: SectionsService) { 
  }

  ngOnInit() {
    this.init()
  }

  init(){
    this.sections = this.footer.sections
  }

  has_section(str_section: string): boolean {
    return this.sectionsService.has_section(this.sections, str_section)
  }

  get_section_atribute(str_section: string, str_atribute: string): any{
    return this.sectionsService.get_section_atribute(this.sections, str_section, str_atribute)
  }

}
