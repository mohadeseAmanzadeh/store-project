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
		  active: false,
		  id: 1
		},
		{
		  sortTitle: 'ارزانترین',
		  type: 'inexpensive',
		  active: false,
		  id: 2
		},
		{
		  sortTitle: 'گرانترین',
		  type: 'expensive',
		  active: false,
		  id: 3
		},
	];

	public sortType : string = 'inexpensive';

	// private _sorterType : string = 'inexpensive';
	// private _sorterType$: BehaviorSubject<string> = new BehaviorSubject(this._sorterType);


	// getSorterType() {
	// 	return this._sorterType$.asObservable()
	// }

	// public setSorterType(sorter: SorterListInterface) {
	// 	this._sorterType = sorter.type;
	// 	this._sorterType$.next(this._sorterType);
	// }
}