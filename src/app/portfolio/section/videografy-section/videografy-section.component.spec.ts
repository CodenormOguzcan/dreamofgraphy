import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideografySectionComponent } from './videografy-section.component';

describe('VideografySectionComponent', () => {
  let component: VideografySectionComponent;
  let fixture: ComponentFixture<VideografySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideografySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideografySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
