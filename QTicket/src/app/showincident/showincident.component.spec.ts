import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowincidentComponent } from './showincident.component';

describe('ShowincidentComponent', () => {
  let component: ShowincidentComponent;
  let fixture: ComponentFixture<ShowincidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowincidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
