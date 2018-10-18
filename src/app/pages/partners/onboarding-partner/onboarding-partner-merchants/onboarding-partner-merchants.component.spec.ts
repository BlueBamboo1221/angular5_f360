import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingPartnerMerchantsComponent } from './onboarding-partner-merchants.component';

describe('OnboardingPartnerMerchantsComponent', () => {
  let component: OnboardingPartnerMerchantsComponent;
  let fixture: ComponentFixture<OnboardingPartnerMerchantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingPartnerMerchantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingPartnerMerchantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
