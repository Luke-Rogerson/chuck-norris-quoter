import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllQuotesComponent } from './show-all-quotes.component';

describe('ShowAllQuotesComponent', () => {
  let component: ShowAllQuotesComponent;
  let fixture: ComponentFixture<ShowAllQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
