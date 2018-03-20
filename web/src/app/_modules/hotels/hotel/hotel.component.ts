import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from '../../../models/hotel.model';

/**
 * HotelComponent
 *
 * @description :: Hotel Component
 * @author:: Cristian Quintero <cristianqr22@gmail.com>
 */


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  @Input() hotel: Hotel;

  constructor() { }

  ngOnInit() {
  }

  public countStar(rate: number){
    let arrayStars = [];
    for (let i = 0; i < rate; i++){
      arrayStars.push(i);
    }

    return arrayStars;
  }

}
