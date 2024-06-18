import { Injectable, Input, Output } from '@angular/core';
import { EventEmitter } from 'node:stream';
import { WatchListService } from './watch-list.service';


@Injectable({
  providedIn: 'root'
})
export class FilterService {


    
    constructor(
        private watchListService: WatchListService,
    ) {
      
    }

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
    
    public filterList(type: any) {
        return new Promise((resolve, reject)=>{
            this.watchListService.getWatchList().then((resp: any) => {
                //@todo It is better to clean duplicate codes inside a function and pass arguments
                let watchlist = resp;
                let hasGenderFilter = false;
                this.watchListData = [];
                watchlist.forEach((val: any) => {
                    this.genderList.forEach((gender: any)=>{

                        if ( gender.active ){
                            hasGenderFilter = true;
                            if(val.genderId == gender.id){
                                this.watchListData.push(val);
                            }

                        }
                    })
                })
                watchlist = hasGenderFilter?this.watchListData: watchlist;
                let hasColorFilter = false;
                this.watchListData = [];
                watchlist.forEach((val: any) => {
                    this.colorList.forEach((color: any)=>{
                        if ( color.active ){
                            hasColorFilter = true;
                            if(val.colorId == color.id){
                                this.watchListData.push(val);
                            }

                        }
                    })

                })
                watchlist = hasColorFilter?this.watchListData: watchlist;
                let hasWarrantyFilter = false;
                this.watchListData = [];
                watchlist.forEach((val: any) => {
                    this.warrantyList.forEach((warranty: any)=>{
                        if ( warranty.active ){
                            hasWarrantyFilter = true;
                            if(val.warrantyId == warranty.id){
                                this.watchListData.push(val);
                            }
                        }
                    })
                })
                watchlist = hasWarrantyFilter?this.watchListData: watchlist;

                resolve(watchlist);

            })

        })
    }
}