import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateincidentComponent } from './createincident.component';

describe('CreateincidentComponent', () => {
  let component: CreateincidentComponent;
  let fixture: ComponentFixture<CreateincidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateincidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
