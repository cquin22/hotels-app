
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Search} from '../models/search.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HotelStorage{

  private search = new Subject<Search>();

  constructor() {

  }

  public setSearch(search: Search){
    this.search.next(search);
  }

  public getSearch(): Observable<Search>{
    return this.search.asObservable();
  }

}
