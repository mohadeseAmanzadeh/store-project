import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [HttpClientModule,
    CommonModule
  ],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.scss'
})
export class WatchListComponent implements OnInit{

  public watchlist: any = [];

  constructor(
    private myService : AppService
  ) {}

  ngOnInit(): void {
    this.myService.getData().subscribe((resp: any) => {
      console.log(resp);
      this.watchlist = resp
    });
  }


  
}
