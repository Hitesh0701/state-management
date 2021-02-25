import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilevelFormArrayComponent } from './multilevel-form-array.component';

describe('MultilevelFormArrayComponent', () => {
  let component: MultilevelFormArrayComponent;
  let fixture: ComponentFixture<MultilevelFormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultilevelFormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultilevelFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
