import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltycardComponent } from './loyaltycard.component';

describe('LoyaltycardComponent', () => {
  let component: LoyaltycardComponent;
  let fixture: ComponentFixture<LoyaltycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoyaltycardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoyaltycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
