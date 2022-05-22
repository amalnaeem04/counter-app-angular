import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterModalComponent } from './add-counter-modal.component';


describe('CountersTableComponent', () => {
  let component: CounterModalComponent;
  let fixture: ComponentFixture<CounterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create table', () => {
    expect(component).toBeTruthy();
  });
});
