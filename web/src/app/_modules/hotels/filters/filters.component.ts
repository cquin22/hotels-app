import { Component, OnInit } from '@angular/core';
import {HotelStorage} from '../../../storage/hotel.storage';
import {Search} from '../../../models/search.model';

/**
 * FiltersComponent
 *
 * @description :: Filters Component
 * @author:: Cristian Quintero <cristianqr22@gmail.com>
 */


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  public searchWord : string;

  public search: Search = new Search();

  public starsModel = {
    one: {value: false, rate: 1},
    two: {value: false, rate: 2},
    three: {value: false, rate: 3},
    four: {value: false, rate: 4},
    five: {value: false, rate: 5}
  };

  constructor(
    private hotelStorage: HotelStorage
  ) { }

  ngOnInit() {
  }


  public searchHotel(){
    this.search.word = this.searchWord;
    this.hotelStorage.setSearch(this.search);

  }

  public addStarForSearch(model: any){
    let index = this.search.stars.indexOf(this.starsModel[model].rate);
    if(this.starsModel[model].value) {
      this.search.stars.push(this.starsModel[model].rate);
      this.searchHotel();
    }else if(index > -1){
        this.search.stars.splice(index, 1);
        this.searchHotel();
    }

  }

}
