import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  styles: [``],
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] = [
    {
      label: 'Início',
      command: (e) => { this.activateItem(e.item.label) },
      routerLink: ['']
    },
    {
      label: 'Personagem',
      command: (e) => { this.activateItem(e.item.label) },
      routerLink: ['/character']
    },
  ];
  public logoPath: string = `${environment.site_url}assets/logotipo.png`
  public iconUserPath: string = `${environment.site_url}assets/icone_login.png`
  public btnLabel = 'FIND A THERAPIST'
  public mobile = environment.is_mobile

  constructor() { }

  ngOnInit() {
  }

  activateItem(menuItem: string){
    this.items.map(item => {
      if ( item?.label === menuItem ){
        item.style = {borderBottom: '5px solid #1d9fe3'}
      } else {
        item.style = {borderBottom: '0'}
      }
      return item
    })
  }

  con(e: any ){
    console.log(e)
  }

}
