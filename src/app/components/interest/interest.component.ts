import { Component, OnInit } from '@angular/core';
import { WatchListService } from '../../services/watch-list.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-interest',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    SvgIconComponent
  ],
  templateUrl: './interest.component.html',
  styleUrl: './interest.component.scss'
})
export class InterestComponent implements OnInit{

  public interestList: any = [];

  constructor(
    private dataService: DataService,

  ) {}

  ngOnInit(): void {
    this.getLocalStorageLike();
  }

  
  getLocalStorageLike() {
    this.interestList =  this.dataService.getDataFromStorage('like', this.interestList);
  }


  clearItem(item: any) {
    this.interestList.splice(item, 1);
    this.dataService.setDataTostorage('like', this.interestList);
  }
}
