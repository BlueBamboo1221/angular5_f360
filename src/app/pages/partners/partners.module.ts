import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { AppModule } from '../../app.module';

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Routes
import { PartnersRouteModule } from './partners.route.module';

import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';

import {MerchantService} from '../partners/onboarding-partner/onboarding-partner-merchants/service/merchant.service';

@NgModule({
    imports: [PartnersRouteModule, SharedModule, CommonModule],
    declarations: [PartnersRouteModule.components],
    exports: [SharedModule, PartnersRouteModule.components,CommonModule],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ],
    providers: [
        MerchantService,
    ],
})
export class PartnersModule{ }


