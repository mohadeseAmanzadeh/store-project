import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SorterListComponent } from '../sorter-list/sorter-list.component';
import { SearchService } from '../../services/search.service';
import { SearchPipe } from '../../pipes/search.pipe';
import { SortPipe } from '../../pipes/sort.pipe';
import { SorterListService } from '../../services/sorter-list.service';
import { WatchListService } from '../../services/watch-list.service';
import { ListFilterComponent } from '../list-filter/list-filter.component';
import { RouterModule } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';
import { DataService } from '../../services/data.service';
import { ActionsComponent } from '../actions/actions.component';




@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [
    SorterListComponent,
    HttpClientModule,
    CommonModule,
    SearchPipe,
    SortPipe,
    ListFilterComponent,
    RouterModule, 
    SvgIconComponent,
    ActionsComponent

  ],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.scss'
})
export class WatchListComponent implements OnInit{

  // @Input() watch: any = {
  //   id: 0,
  //   date: '',
  //   model: '',
  //   price: '',
  //   img: '',
  //   brandTitle: '',
  //   genderType: '',
  //   warrantyType: '',
  //   colorName: ''
  // }
  public watchList: any = [];
 
  constructor(
    private watchListService: WatchListService,
    private dataService: DataService,
    public searchService: SearchService,
    public sorterListService: SorterListService,
  ) {}

  ngOnInit(): void {
    
    this.getLocalStorage();
    if (this.watchList == null || this.watchList.length === 0) {
        this.watchListService.getWatchList().then((resp: any) => {
        this.watchList = resp;
        this.dataService.setDataTostorage('watchList', this.watchList);
      }) 
    }   
  }


  addToLike(item: any) {
    //@TODO It is better to send ID
    this.watchListService.setToLocalStorageLike(item);
  }
  
  addToBasket(item: any) {
    //@TODO It is better to send ID
    this.watchListService.setToLocalStorageBasket(item);
  }

  addToCamparison(item: any) {
    //@TODO It is better to send ID
    this.watchListService.setToLocalStorageCamparison(item);
  }

  deleteItem(item:any) {
    this.watchList.forEach((value: any, index: any) => {
      if(value.id == item.id) {
        this.watchList.splice(index,1);  
        this.dataService.setDataTostorage('watchList', this.watchList);
      }
    }) 
    
  }

  getLocalStorage() {
    this.watchList = this.dataService.getDataFromStorage('watchList', this.watchList);
  }
}
