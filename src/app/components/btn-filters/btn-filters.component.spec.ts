import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFiltersComponent } from './btn-filters.component';

describe('BtnFiltersComponent', () => {
  let component: BtnFiltersComponent;
  let fixture: ComponentFixture<BtnFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
