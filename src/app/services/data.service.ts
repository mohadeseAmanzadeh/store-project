import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  public getData(){
    return  this._http
      .get('./assets/json/list.json',)
  }

  public setDataTostorage(key: any , value:any){
    localStorage.setItem(key, JSON.stringify(value));
  }

}
