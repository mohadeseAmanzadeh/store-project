import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccordionDirective } from '../accordion/accordion.directive';
import { AccordionComponent } from '../accordion/accordion.component';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { WatchListService } from '../../services/watch-list.service';
import e from 'express';
import { FilterService } from '../../services/filter.service';
import { SpanCheckBoxComponent } from '../span-check-box/span-check-box.component';

@Component({
  selector: 'app-list-filter',
  standalone: true,
  imports: [
    AccordionDirective,
    AccordionComponent,
    CommonModule,
    SvgIconComponent,
    SpanCheckBoxComponent
  ],
  templateUrl: './list-filter.component.html',
  styleUrl: './list-filter.component.scss'
})
export class ListFilterComponent implements OnInit{

  @Output() newWatchList = new EventEmitter();
  public warranty: boolean = false;
  public color: boolean = false;
  public gender: boolean = false;

  
  constructor(
    public filterService : FilterService,
  ) {}

  ngOnInit(): void {

    
  }


  public filterListByGender(gender: any) {
    gender.active= !gender.active; 
    this.filterService.filterList('gender').then((res)=>{
      this.newWatchList.emit(res);
    });
  }
 
  public filterListByWarranty(warranty: any) {
    warranty.active= !warranty.active; 
    this.filterService.filterList('warranty').then((res)=>{
      this.newWatchList.emit(res);
    });
  }
  public filterListByColor(color: any) {
    color.active= !color.active; 
    this.filterService.filterList('color').then((res)=>{
      this.newWatchList.emit(res);
    });
  }
}
