import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLeftComponent } from './dialog-left.component';

describe('DialogLeftComponent', () => {
  let component: DialogLeftComponent;
  let fixture: ComponentFixture<DialogLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
