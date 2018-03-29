import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformButtonsComponent } from './platform-buttons.component';

describe('PlatformButtonsComponent', () => {
  let component: PlatformButtonsComponent;
  let fixture: ComponentFixture<PlatformButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
