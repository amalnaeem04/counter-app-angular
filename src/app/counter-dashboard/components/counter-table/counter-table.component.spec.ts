import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTableComponent } from './counter-table.component';

describe('CountersTableComponent', () => {
  let component: CounterTableComponent;
  let fixture: ComponentFixture<CounterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create table', () => {
    expect(component).toBeTruthy();
  });
});
