import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianChefComponent } from './italian-chef.component';

describe('ItalianChefComponent', () => {
  let component: ItalianChefComponent;
  let fixture: ComponentFixture<ItalianChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItalianChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItalianChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
