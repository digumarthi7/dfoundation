import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainhomemenuComponent } from './mainhomemenu.component';

describe('MainhomemenuComponent', () => {
  let component: MainhomemenuComponent;
  let fixture: ComponentFixture<MainhomemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainhomemenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainhomemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
