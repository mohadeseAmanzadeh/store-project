import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { CommonModule } from '@angular/common';
import { SorterListComponent } from '../sorter-list/sorter-list.component';
import { AccordionDirective } from '../accordion/accordion.directive';
import { AccordionComponent } from '../accordion/accordion.component';
import { SearchService } from '../../services/search.service';
import { SearchPipe } from '../../pipes/search.pipe';
import { SortPipe } from '../../pipes/sort.pipe';
import { SorterListService } from '../../services/sorter-list.service';




@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [
    SorterListComponent,
    HttpClientModule,
    CommonModule,
    AccordionDirective,
    AccordionComponent,
    SearchPipe,
    SortPipe
  ],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.scss'
})
export class WatchListComponent implements OnInit{

  public watchList: any = [];
  public brandList: any = [];
  public colorList: any = [];
  public genderList: any = [];

  constructor(
    private myService : AppService,
    public searchService: SearchService,
    public sorterListService: SorterListService
  ) {}

  ngOnInit(): void {
    // this.myService.getList().subscribe((brandList: any) => {
    //   this.myService.getData().subscribe((watchList: any) => {
    //     this.watchList = this._prepareItems(watchList, brandList);
    //   });
    // });

    this.myService.getGenderList().subscribe((genderList: any) => {
      this.myService.getColorList().subscribe((colorList: any) => { 
        this.myService.getList().subscribe((brandList: any) => {
          this.myService.getData().subscribe((watchList: any) => {
            this.watchList = this._prepareItems(watchList, brandList, colorList, genderList);
          });
        });
       });  
    })


    // this.myService.getColorList().subscribe((colorList: any) => {
    //   console.log(colorList);
      
    // });

    // this.myService.getGenderList().subscribe((genderList: any) => {
    //   console.log(genderList);
      
    // })

  }

  private _prepareItems(watchList: any, brandList: any, colorList: any, genderList: any) {
    watchList.forEach((watch: any) => {
      let idxBrand = brandList.findIndex((brand: any) => brand.id == watch.brandId);
      let idxColor = colorList.findIndex((color: any) => color.id == watch.colorId);
      let idxGender = brandList.findIndex((gender: any) => gender.id == watch.genderId);
      watch.brandTitle = brandList[idxBrand].title;
      watch.colorNamne = colorList[idxColor].color;
      watch.genderType = genderList[idxGender].gender;
    });
    return watchList;
  }

  // private _preparedColor(watchList: any, colorList: any) {
  //   watchList.forEach((watch: any) => {
  //     let idx = colorList.findIndex((color: any) => color.id == watch.colorId);
  //     watch.colorTitle = colorList[idx].color;
  //   });

  //   return watchList;
  // }

  // private _preparedGender(watchList: any, genderList: any) {
  //   watchList.forEach((watch: any) => {
  //     let idx = genderList.findIndex((gender: any) => gender.id == watch.genderId);
  //     watch.genderTitle = genderList[idx].gender;
  //   });
    
  //   return watchList;
  // }

}
