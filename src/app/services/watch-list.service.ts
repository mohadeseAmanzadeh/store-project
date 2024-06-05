import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  public watchList: any = [];
  public brandList: any = [];
  public colorList: any = [];
  public genderList: any = [];
  


  constructor(
    private dataService : DataService,
  ) { }


  public getWatchList() {
    return new Promise((resolve, reject) => {
      if (this.watchList.length != 0) {
        return this.watchList;
      }
      this.dataService.getGenderList().subscribe((genderList: any) => {
        this.dataService.getColorList().subscribe((colorList: any) => { 
          this.dataService.getList().subscribe((brandList: any) => {
            this.dataService.getData().subscribe((watchList: any) => {
              this.watchList = this._prepareItems(watchList, brandList, colorList, genderList);
            });
          });
         });  
      })
      resolve(this.watchList);
    })
  }

  private _prepareItems(watchList: any, brandList: any, colorList: any, genderList: any) {
    watchList.forEach((watch: any) => {
      let idxBrand = brandList.findIndex((brand: any) => brand.id == watch.brandId);
      let idxColor = colorList.findIndex((color: any) => color.id == watch.colorId);
      let idxGender = brandList.findIndex((gender: any) => gender.id == watch.genderId);
      watch.brandTitle = brandList[idxBrand].title;
      watch.colorNamne = colorList[idxColor].color;
      watch.genderType = genderList[idxGender].gender;
    });
    return watchList;
  }


}
