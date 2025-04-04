import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionalPlanComponent } from './nutritional-plan.component';

describe('NutritionalPlanComponent', () => {
  let component: NutritionalPlanComponent;
  let fixture: ComponentFixture<NutritionalPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionalPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionalPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
