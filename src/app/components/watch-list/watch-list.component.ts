import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { CommonModule } from '@angular/common';
import { SorterListComponent } from '../sorter-list/sorter-list.component';
import { AccordionDirective } from '../accordion/accordion.directive';
import { AccordionComponent } from '../accordion/accordion.component';


@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [
    SorterListComponent,
    HttpClientModule,
    CommonModule,
    AccordionDirective,
    AccordionComponent,
  ],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.scss'
})
export class WatchListComponent implements OnInit{

  public watchList: any = [];
  public brandList: any = [];

  constructor(
    private myService : AppService
  ) {}

  ngOnInit(): void {
    
    this.myService.getList().subscribe((brandList: any) => {
      this.myService.getData().subscribe((watchList: any) => {
        this.watchList = this._prepareItems(watchList, brandList);
      });
    });
  }

  private _prepareItems(watchList: any, brandList: any) {
    watchList.forEach((watch: any) => {
      let idx = brandList.findIndex((brand: any) => brand.id == watch.brandId);
      watch.brandTitle = brandList[idx].title;
    });
    return watchList;
  }

  // getBrand(brandId: number) {
  //   let idx = this.brandList.findIndex((brand: any) => brand.id == brandId);
  //   return this.brandList[idx];
  // }
  
  
}
