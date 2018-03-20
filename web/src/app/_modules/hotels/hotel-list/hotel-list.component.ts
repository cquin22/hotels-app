import { Component, OnInit } from '@angular/core';
import {HotelService} from '../../../service/hotel.service';
import {MzToastService} from 'ng2-materialize';
import {Hotel} from '../../../models/hotel.model';
import {HotelStorage} from '../../../storage/hotel.storage';
import {Response} from '../../../models/response.model';


/**
 * HotelListComponent
 *
 * @description :: Main Component
 * @author:: Cristian Quintero <cristianqr22@gmail.com>
*/


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  public showLoader: boolean;

  public hotels: Array<Hotel> = [];

  constructor(
    private hotelService: HotelService,
    private toastService: MzToastService,
    private hotelStorage: HotelStorage
  ) { }

  ngOnInit() {
    this.showLoader = true;
    this.hotelService.getHotels()
      .subscribe(
        response => {
          this.successHadler(response);
        }, e => {
          this.errorHadler();
        });

    this.hotelStorage.getSearch().subscribe(search =>{
      this.hotels = [];
      this.showLoader = true;
      this.hotelService.filterHotels(search)
        .subscribe(
          response => {
            this.successHadler(response);
          }, e => {
            this.errorHadler();
          });
    })
  }


  private successHadler(response: Response){
    this.showLoader = false;
    if(response.status === 200){
      this.hotels = response.data;
    }
  }


  private errorHadler(){
    this.showLoader = false;
    this.toastService.show('<p><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Ocurrio un error inesperado por favor intenta mas tarde</p>', 4000, );
  }
}
