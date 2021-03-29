import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadTabsComponent } from './dashboad-tabs.component';

describe('DashboadTabsComponent', () => {
  let component: DashboadTabsComponent;
  let fixture: ComponentFixture<DashboadTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboadTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboadTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
