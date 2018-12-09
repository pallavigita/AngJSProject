import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignDevelopmentComponent } from './web-design-development.component';

describe('WebDesignDevelopmentComponent', () => {
  let component: WebDesignDevelopmentComponent;
  let fixture: ComponentFixture<WebDesignDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDesignDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesignDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
