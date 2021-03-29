import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenOptionComponent } from './screen-option.component';

describe('ScreenOptionComponent', () => {
  let component: ScreenOptionComponent;
  let fixture: ComponentFixture<ScreenOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
