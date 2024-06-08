import { Injectable, Input, Output } from '@angular/core';
import { EventEmitter } from 'node:stream';
import { WatchListService } from './watch-list.service';


@Injectable({
  providedIn: 'root'
})
export class FilterService {


    constructor(
        private watchListService: WatchListService,
    ) {}

  public genderList = [
    {
      id: 1,
      gender: "بچگانه",
      active: false
  },
  {
      id: 2,
      gender: "زنانه",
      active: false
  },
  {
      id: 3,
      gender: "مردانه",
      active: false
  }
  ]
  public colorList = [
    {
      id: 1,
      color: "سبز",
      active: false
  },
  {
      id: 2,
      color: "نقره‌ای",
      active: false
  },
  {
      id: 3,
      color: "خاکستری",
      active: false
  },
  {
      id: 4,
      color: "بنفش",
      active: false
  },
  {
      id: 5,
      color: "صورتی",
      active: false
  },
  {
      id: 6,
      color: "رزگلد",
      active: false
  },
  {
      id: 7,
      color: "سورمه‌ای",
      active: false
  },
  {
      id: 8,
      color: "مشکی",
      active: false
  },
  {
      id: 9,
      color: "آبی",
      active: false
  },
  {
      id: 10,
      color: "طلایی",
      active: false
  },
  {
      id: 11,
      color: "سفید",
      active: false
  }
  ]
  public warrantyList = [
    {
      id: 1,
      warranty: "گارانتی 24 ماهه دیجیران",
      active: false
  },
  {
      id: 2,
      warranty: "گارانتی 18 ماهه زمان و زیور",
      active: false
  },
  {
      id: 3,
      warranty: "گارانتی 12 ماهه پوزیترون",
      active: false
  }
  ]

  
  public watchListData: any = [];
//   public watchListClone: any = [];
  
  public filterList(type: any, id: any) {
    let hasFilter = false;
    this.watchListData = [];
    this.watchListService.watchListCopy.forEach((val: any) => {
        if (type == 'gender' && id == val.genderId) {
            
            this.genderList.forEach((gender: any)=>{
              if (type == 'gender' && gender.active && val.genderId == gender.id ){
                  hasFilter = true;
                  this.watchListData.push(val);
              }
            })
        }
        if (type == 'color' && id == val.colorId) {
            
            this.colorList.forEach((color: any)=>{
              if ( color.active && val.colorId == color.id ){
                  hasFilter = true;
                  this.watchListData.push(val);
              }
            })
        }
        if (type == 'warranty' && id == val.warrantyId) {
            this.warrantyList.forEach((warranty: any)=>{
                if ( warranty.active && val.warrantyId == warranty.id ){
                    hasFilter = true;
                    this.watchListData.push(val);
                }
              })
        }
    })

    this.watchListService.watchList = !hasFilter?this.watchListService.watchListCopy:this.watchListData;
    // if (!hasFilter){
    //   this.watchListData = this.watchListClone;
    // }
    // this.newWatchList.emit(this.watchListData);
  }



}