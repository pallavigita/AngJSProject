import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomWebappComponent } from './custom-webapp.component';

describe('CustomWebappComponent', () => {
  let component: CustomWebappComponent;
  let fixture: ComponentFixture<CustomWebappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomWebappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomWebappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
