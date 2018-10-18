import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Merchant } from '../../models/merchant';

/**
 * Service for processing company-related Http requests.
 * 
 * @export
 * @class CompanyService
 */
@Injectable()
export class MerchantService {

  constructor(private http: HttpClient) { }

  /**
   * Returns a list of companies.
   * 
   * @param {boolean} [partners]
   * @returns {Observable<Merchant[]>} 
   * @memberof MerchantService
   */
  list(partners?: boolean): Observable<Merchant[]> { 
    // TODO: When call REST API pass partners as a query parameter to filter the
    // companies returned.  Here we will simulate it by filtering the results
    // after the companies are loaded.
    return this.http.get<Merchant[]>('assets/data/companyList.json')
      .map(
        (res) => res
      );
  }
}
