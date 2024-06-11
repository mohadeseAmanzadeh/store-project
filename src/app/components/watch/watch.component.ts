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
  public watchId: string = '';
  public watch: any;

  constructor(
    private watchListService: WatchListService,
    private route: ActivatedRoute,
   
  ) {
    this.watchId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {

    this.prepareItems();
    
  }

  prepareItems() {
   let item = this.watchListService.getWatch(this.watchId);
   this.watch = item[0];
   
  }
}
