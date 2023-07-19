import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneSectionComponent } from './drone-section.component';

describe('DroneSectionComponent', () => {
  let component: DroneSectionComponent;
  let fixture: ComponentFixture<DroneSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroneSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
