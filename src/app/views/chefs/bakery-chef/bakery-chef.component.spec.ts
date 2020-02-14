import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryChefComponent } from './bakery-chef.component';

describe('BakeryChefComponent', () => {
  let component: BakeryChefComponent;
  let fixture: ComponentFixture<BakeryChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakeryChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
