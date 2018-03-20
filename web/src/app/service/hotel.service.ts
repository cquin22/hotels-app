
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Response} from '../models/response.model';
import 'rxjs/Rx';
import {Search} from '../models/search.model';


/**
 * HotelService
 *
 * @description :: Service for request
 * @author:: Cristian Quintero <cristianqr22@gmail.com>
*/


@Injectable()
export class HotelService{

  private environment =  environment;

  constructor(
    private http: Http,
  ){

  }

  /**
   * @sailsdoc
   *
   * @description Get hotels
   * @returns {Observable} Response.
  */
  public getHotels() : Observable<Response>{
    return this.http.get(this.environment.api + 'hotel')
      .map((res: any) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(
        error.json().error || 'Server error')
      );
  }

  /**
   * @sailsdoc
   *
   * @description Filter hotels
   * @params: Search
   * @returns {Observable} Response.
  */

  public filterHotels(search: Search) : Observable<Response>{
    return this.http.post(this.environment.api + 'hotel/' + search.word, search.stars)
      .map((res: any) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(
        error.json().error || 'Server error')
      );
  }

}
