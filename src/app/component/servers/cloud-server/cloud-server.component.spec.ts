import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudServerComponent } from './cloud-server.component';

describe('CloudServerComponent', () => {
  let component: CloudServerComponent;
  let fixture: ComponentFixture<CloudServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
