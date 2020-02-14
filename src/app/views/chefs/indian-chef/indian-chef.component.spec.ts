import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianChefComponent } from './indian-chef.component';

describe('IndianChefComponent', () => {
  let component: IndianChefComponent;
  let fixture: ComponentFixture<IndianChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
