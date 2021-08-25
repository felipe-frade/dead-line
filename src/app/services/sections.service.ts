import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor() { }

  has_section(sections: any, str_section: string): boolean {
    return sections.some((s: any) => s.name == str_section)
  }

  get_section_atribute(sections: any, str_section: string, str_atribute: string): any{
    const section = sections.find((s: any) => s.name == str_section)
    if(section){
      if (str_atribute in section){
        return section[str_atribute]
      }
    }
    return null
  }

}
