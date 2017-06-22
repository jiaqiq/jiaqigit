import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRightComponent } from './dialog-right.component';

describe('DialogRightComponent', () => {
  let component: DialogRightComponent;
  let fixture: ComponentFixture<DialogRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
