import { Component, OnInit } from '@angular/core';
import { WatchListService } from '../../services/watch-list.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';

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
    public watchListService: WatchListService,
  ) {}

  ngOnInit(): void {
    // this.getLocalStorage();
    this.getLocalStorageLike();
  }

  // getLocalStorage() {
  //   let w: any = localStorage.getItem('watchList');
  //   if (w) {
  //     w =  JSON.parse(w);    
  //   }
    
  // }


  getLocalStorageLike() {
    this.interestList = localStorage.getItem('like');
    if (this.interestList) {
      this.interestList =  JSON.parse(this.interestList);    
      console.log(this.interestList);
      
    }
  }


  clearItem(item: any) {
    this.interestList.splice(item, 1);
    localStorage.setItem('like', JSON.stringify(this.interestList));
  }
}
