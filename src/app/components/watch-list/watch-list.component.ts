import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SorterListComponent } from '../sorter-list/sorter-list.component';
import { SearchService } from '../../services/search.service';
import { SearchPipe } from '../../pipes/search.pipe';
import { SortPipe } from '../../pipes/sort.pipe';
import { SorterListService } from '../../services/sorter-list.service';
import { WatchListService } from '../../services/watch-list.service';
import { ListFilterComponent } from '../list-filter/list-filter.component';




@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [
    SorterListComponent,
    HttpClientModule,
    CommonModule,
    SearchPipe,
    SortPipe,
    ListFilterComponent
  ],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.scss'
})
export class WatchListComponent implements OnInit{

  public watchList: any = [];

  public watch: any;

  constructor(
    private watchListService: WatchListService,
    public searchService: SearchService,
    public sorterListService: SorterListService
  ) {}

  ngOnInit(): void {

    this.watchListService.getWatchList().then((resp: any) => {
      this.watchList = resp;
    }) 
  }

}
