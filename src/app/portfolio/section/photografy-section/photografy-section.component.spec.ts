import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotografySectionComponent } from './photografy-section.component';

describe('PhotografySectionComponent', () => {
  let component: PhotografySectionComponent;
  let fixture: ComponentFixture<PhotografySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotografySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotografySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
