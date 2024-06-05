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

  public getList() {
    return  this._http
    .get('./assets/json/brandId.json',)
  }

  public getColorList() {
    return  this._http
    .get('./assets/json/pageColor.json',)
  }

  public getGenderList() {
    return  this._http
    .get('./assets/json/gender.json',)
  }
}
