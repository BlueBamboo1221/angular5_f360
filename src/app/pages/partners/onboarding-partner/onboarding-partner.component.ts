import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { IndicatorsService } from '../../../services/indicators.service';

@Component({
  selector: 'app-onboarding-partner',
  templateUrl: './onboarding-partner.component.html',
  styleUrls: ['./onboarding-partner.component.scss'],
  providers: [IndicatorsService]
})
export class OnboardingPartnerComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  activateButton = true;
  activePage = false;
  currentName:string = ''; //rki_add
  partnerInnerMenu = [
    {
      path: 'details',
      name: 'Details',
      indicator: ''
    },
    {
      path: 'clients',
      name: 'Clients',
      indicator: ''
    },
    {
      path: 'reports',
      name: 'Reports',
      indicator: ''
    },
    {
      path: 'merchants',//rki_add
      name: 'Merchants',
      indicator: ''
    }
  ];
  pageSettings = ['Inactive', 'Option 2', 'Option 3','Option 4'];//rki_add

  indicators = {
    detailsIndicator: '',
    clientsIndicator: '',
    reportsIndicator: '',
    merchantsIndicator: '' //rki_add

  };

  constructor(private indicatorsService: IndicatorsService) {
    indicatorsService.indicator$.subscribe(indicator => {
      this.indicators = indicator;
      this.partnerInnerMenu[0].indicator = this.indicators.detailsIndicator;
      this.partnerInnerMenu[1].indicator = this.indicators.clientsIndicator;
      this.partnerInnerMenu[2].indicator = this.indicators.reportsIndicator;
      this.partnerInnerMenu[3].indicator = this.indicators.merchantsIndicator;//rki_add

      this.activateButton = true;
    });
  }

  ngOnInit() {}

  setSelectedName(val){     //rki_add
    this.currentName = val;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  titleVal = val => console.log(val);

  inactive = val => {
    this.activePage = val;
  };

  selectPageSettings = val => {
    switch (val) {
      case 'Inactive':
        this.activePage = false;
        break;

      default:
        break;
    }
  };
}
