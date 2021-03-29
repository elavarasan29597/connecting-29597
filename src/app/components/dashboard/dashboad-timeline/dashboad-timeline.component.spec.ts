import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadTimelineComponent } from './dashboad-timeline.component';

describe('DashboadTimelineComponent', () => {
  let component: DashboadTimelineComponent;
  let fixture: ComponentFixture<DashboadTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboadTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboadTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
