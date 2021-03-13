import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenklerComponent } from './renkler.component';

describe('RenklerComponent', () => {
  let component: RenklerComponent;
  let fixture: ComponentFixture<RenklerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenklerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenklerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
