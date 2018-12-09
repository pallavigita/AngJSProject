import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualServerComponent } from './virtual-server.component';

describe('VirtualServerComponent', () => {
  let component: VirtualServerComponent;
  let fixture: ComponentFixture<VirtualServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
