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
  private like: any = [];
  private basketList: any = [];
  private camparisonList: any = [];

  constructor(
    private dataService : DataService,
  ) { }

  private _prepareItems(watchList: any) {
    this.watchList = [];
    watchList.forEach((watch: any) => {
      watch.brandTitle = BrandList[watch.brandId];
      watch.colorName =  ColorList[watch.colorId];
      watch.genderType = GenderList[watch.genderId];
      watch.warrantyType = WarrantyList[watch.warrantyId];
      this.watchList.push(watch);
    });
    return this.watchList;
  }

  public getWatchList() {
    return new Promise((resolve, reject) => {
      if (this.watchList.length != 0) {
        resolve(this.watchList);
      }
      this.dataService.getData().subscribe((watchList: any) => {
        this.watchList = this._prepareItems(watchList);
        this.watchListCopy = this.watchList;

        // this.setToLocalStorage(watchList);
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

  public setToLocalStorage(watchList: any) {
    this.dataService.setDataTostorage('watchList', watchList);
  }

  public setToLocalStorageLike(item: any) {
    this.like.push(item);
    this.dataService.setDataTostorage('like', this.like)
  }

  public setToLocalStorageBasket(item: any) {
    this.basketList.push(item);
    this.dataService.setDataTostorage('basketList', this.basketList)
  }

  public setToLocalStorageCamparison(item: any) {
    this.camparisonList.push(item);
    this.dataService.setDataTostorage('camparisonList', this.camparisonList)
  }

  public editWatch(watch: any) {
    this.watchList.forEach((value: any, index: any) => {
      if (value.id == watch.id) {
        
      }
    });
  }

  addWatch(watch: any) {
    let index = this.watchList.findIndex((value: any) => value.id === watch.id);
    if (index === -1) {
      watch.id = this.watchList.length +1;
      this.watchList.push(watch)
    } else {
      this.watchList[index] = watch;
    }
  }

}
