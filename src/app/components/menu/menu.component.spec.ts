/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MenuComponent } from './menu.component';
import { ButtonComponent } from '../button/button.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have items inside menu', () => {
    expect(component.items).toEqual([
      { label: 'ABOUT' },
      { label: 'RESOURCES' },
      { label: 'TRAINING' },
      { label: 'CERTIFICATIONS' },
      { label: 'EVENTS' },
      { label: 'APP' },
      { label: 'CONTACT' },
    ])
  });

  it('should create menu-bar', fakeAsync(() => {
    const menu = fixture.nativeElement.querySelector('p-menubar')
    expect(menu).toBeTruthy()
  
  }));

});
