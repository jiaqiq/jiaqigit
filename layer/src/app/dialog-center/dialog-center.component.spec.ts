import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCenterComponent } from './dialog-center.component';

describe('DialogCenterComponent', () => {
  let component: DialogCenterComponent;
  let fixture: ComponentFixture<DialogCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
