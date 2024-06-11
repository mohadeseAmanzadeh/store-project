import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BrandList, ColorList, WarrantyList, GenderList } from '../data/data.api';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  public watchList: any = [];
  public watchListCopy: any = [];
  public brandList: any = [];
  public colorList: any = [];
  public genderList: any = [];
  


  constructor(
    private dataService : DataService,
  ) { }


  public getWatchList() {
    return new Promise((resolve, reject) => {
      if (this.watchList.length != 0) {
        resolve(this.watchList);
      }
      this.dataService.getData().subscribe((watchList: any) => {
        this.watchList = this._prepareItems(watchList);
        this.watchListCopy = this.watchList;
      })
      resolve(this.watchList);
    })
  }

   public getWatch(watchId: any ) {
    return this.watchList.filter((item: any) => item.id === watchId);
}
  private _prepareItems(watchList: any) {
    this.watchList = [];
    watchList.forEach((watch: any) => {
      watch.brandTitle = BrandList[watch.brandId];
      watch.colorNamne =  ColorList[watch.colorId];
      watch.genderType = GenderList[watch.genderId];
      watch.warrantyType = WarrantyList[watch.warrantyId];
      this.watchList.push(watch);
    });
    return this.watchList;
  }

}
