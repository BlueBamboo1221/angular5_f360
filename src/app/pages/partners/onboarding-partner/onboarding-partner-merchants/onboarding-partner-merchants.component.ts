import { Component, OnInit,Inject,Input } from '@angular/core';
import { IndicatorsService } from '../../../../services/indicators.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OnboardingPartnerComponent } from '../onboarding-partner.component';
import { ActivatedRoute, Router } from "@angular/router";
import { RadioListItemsComponent } from '../../../../dialogs/radio-list-items/radio-list-items.component';
import { MerchantService } from './service/merchant.service';
import { Merchant } from './model/merchant';
import { Observable } from 'rxjs/Observable';
import { GuruUser, UserMerchant, UserMerchantStatus } from '../../../../models/user';
import { map } from 'rxjs/operators/map';

RadioListItemsComponent
@Component({
  selector: 'app-onboarding-partner-merchants',
  templateUrl: './onboarding-partner-merchants.component.html',
  styleUrls: ['./onboarding-partner-merchants.component.scss']
})
export class OnboardingPartnerMerchantsComponent implements OnInit {

  companyList: Merchant[];
  clientsList = [];
  dataArray = [];
  dialogName: string;
  parentSetName: string;

  constructor(
    @Inject(OnboardingPartnerComponent) private parent: OnboardingPartnerComponent,
    public dialog: MatDialog,
    private indicatorsService: IndicatorsService,
    private router:Router,
    private merchantService: MerchantService
  ) {
   /* this.fetchCompanyList(data => {
      this.clientsList = data;
      this.openDialog(this.dialog);
    });
*/
  }
  ngAfterContentInit()
  {
    this.parentSetName = this.parent.currentName;
    this.dialogName = this.parentSetName;
    setTimeout(() => {
      this.openDialog(this.dialog);
  });
  }

  ngOnInit() {
    this.merchantService.list(false).pipe(
      map( res => res.map(merchant => {
        const userMerchant: Merchant = Object.assign({}, merchant, {active:false, included: false});
        return userMerchant;
      }))
    ).subscribe(
      (list) => this.companyList = list
    );
    this.dialogName = this.parentSetName;
  }


  openDialog(dialog): void {
    this.indicatorsService.setClientsIndicator('true');
    this.dataArray = this.companyList;
    this.dialogName = this.parentSetName;
    const dialogRef = this.dialog.open(RadioListItemsComponent, {
      data: {
        dataArray: this.dataArray,
        dialogName: this.dialogName

      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){

        this.parent.partnerInnerMenu.push({path: 'client',
            name: result,
            indicator: ''});
    }
    this.router.navigate(['/onboarding-partner/details'])
    });
    
  }

  fetchCompanyList(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/companyList.json`);
    req.onload = () => {
      const rows = JSON.parse(req.response);
      cb(rows);
    };
    req.send();
  }


}
