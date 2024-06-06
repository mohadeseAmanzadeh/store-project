import { Component, OnInit } from '@angular/core';
import { WatchListService } from '../../services/watch-list.service';

@Component({
  selector: 'app-watch',
  standalone: true,
  imports: [],
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.scss'
})
export class WatchComponent  implements OnInit{

  public watchList: any = [];
  
  constructor(
    private watchListService: WatchListService,
  ) {}

  ngOnInit(): void {

    this.watchListService.getWatchList().then((resp: any) => {
      this.watchList = resp;
    }) 
  }
}
