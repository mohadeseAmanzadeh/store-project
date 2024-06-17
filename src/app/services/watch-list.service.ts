import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BrandList, ColorList, WarrantyList, GenderList } from '../data/data.api';
import { isWeakMap } from 'util/types';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  private watchList: any = [];
  private watchListCopy: any = [];
  private watchListLocalStorage: any = [];
  public brandList: any = [];
  public colorList: any = [];
  public genderList: any = [];
  public like: any = [];


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
        // this.watchListLocalStorage = this.watchList
        this.setToLocalStorage(watchList);
      })
      resolve(this.watchList);
    })
  }

  public setWatchList(watchList: any) {
    this.watchList = watchList
  }

   public getWatch(watchId: any ) {
      return new Promise((resolve, reject) => {
        let item:any = this.getWatchList().then((res:any)=>{
            item = res.filter((item: any) => item.id === watchId);
            item = item?item[0]:null
            resolve(item);
        })
    });
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

  setToLocalStorage(item: any) {
    this.watchListLocalStorage = JSON.stringify(item);
    localStorage.setItem('watchList', this.watchListLocalStorage);
   
  }

  setToLocalStorageLike(item: any) {
    this.like.push(item)
    // this.like = JSON.stringify(this.like);
    localStorage.setItem('like', JSON.stringify(this.like));
  }

  // setToLocalStorage(item: any) {
  //   this.watchListLocalStorage = JSON.stringify(item);
  //   localStorage.setItem('watchList', this.watchListLocalStorage)
  // }

}
