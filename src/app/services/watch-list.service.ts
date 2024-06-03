import { Injectable } from '@angular/core';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  // public watchList: any = [];
  // public brandList: any = [];


  constructor(
    private myService : AppService,
  ) { }


  // public getWatchList() {
  //   this.myService.getList().subscribe((brandList: any) => {
  //     this.myService.getData().subscribe((watchList: any) => {
  //       this.watchList = this._prepareItems(watchList, brandList);
  //     });
  //   });
  // }

  // private _prepareItems(watchList: any, brandList: any) {
  //   watchList.forEach((watch: any) => {
  //     let idx = brandList.findIndex((brand: any) => brand.id == watch.brandId);
  //     watch.brandTitle = brandList[idx].title;
  //   });
  //   return watchList;
  // }

}
