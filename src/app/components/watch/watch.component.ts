import { Component, Input, OnInit } from '@angular/core';
import { WatchListService } from '../../services/watch-list.service';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {

    this.watchListService.getWatchList().then((resp: any) => {
      this.watchList = resp;
    }) 
  }
}
