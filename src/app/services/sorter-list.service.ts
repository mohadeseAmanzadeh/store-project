import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { SorterListInterface } from "../interface/data.interface";



@Injectable({
	providedIn: 'root'
})
export class SorterListService {
 
	public sorterList: SorterListInterface[] =  [
		{
		  sortTitle: 'جدیدترین',
		  type: 'new',
		  active: false
		},
		{
		  sortTitle: 'ارزانترین',
		  type: 'inexpensive',
		  active: false
		},
		{
		  sortTitle: 'گرانترین',
		  type: 'expensive',
		  active: false
		},
	];

	

	// private _sorterType = new BehaviorSubject<any>([])
  


	// getSorterType() {
	// 	return this._sorterType.asObservable()
	// }

	// public setSorterType() {
	// 	this._sorterType.next(this.sorterList);

	// }
}