import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccordionDirective } from '../accordion/accordion.directive';
import { AccordionComponent } from '../accordion/accordion.component';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { WatchListService } from '../../services/watch-list.service';

@Component({
  selector: 'app-list-filter',
  standalone: true,
  imports: [
    AccordionDirective,
    AccordionComponent,
    CommonModule,
    SvgIconComponent
  ],
  templateUrl: './list-filter.component.html',
  styleUrl: './list-filter.component.scss'
})
export class ListFilterComponent implements OnInit{

  public watchListData: any = [];
 

  @Input() watchList: any = [];
  @Output() newWatchList = new EventEmitter();

  public genderList = [
    {
      id: 1,
      gender: "بچگانه",
      active: false
  },
  {
      id: 2,
      gender: "زنانه",
      active: false
  },
  {
      id: 3,
      gender: "مردانه",
      active: false
  }
  ]
  public colorList = [
    {
      id: 1,
      color: "سبز",
      active: false
  },
  {
      id: 2,
      color: "نقره‌ای",
      active: false
  },
  {
      id: 3,
      color: "خاکستری",
      active: false
  },
  {
      id: 4,
      color: "بنفش",
      active: false
  },
  {
      id: 5,
      color: "صورتی",
      active: false
  },
  {
      id: 6,
      color: "رزگلد",
      active: false
  },
  {
      id: 7,
      color: "سورمه‌ای",
      active: false
  },
  {
      id: 8,
      color: "مشکی",
      active: false
  },
  {
      id: 9,
      color: "آبی",
      active: false
  },
  {
      id: 10,
      color: "طلایی",
      active: false
  },
  {
      id: 11,
      color: "سفید",
      active: false
  }
  ]
  public warrantyList = [
    {
      id: 1,
      warranty: "گارانتی 24 ماهه دیجیران",
      active: false
  },
  {
      id: 2,
      warranty: "گارانتی 18 ماهه زمان و زیور",
      active: false
  },
  {
      id: 3,
      warranty: "گارانتی 12 ماهه پوزیترون",
      active: false
  }
  ]

  constructor() {}

  ngOnInit(): void {

    
  }

  public filterList(id: any , type: any) {
    this.watchListData = [];
    this.watchList.forEach((val: any) => {
      if (type == 'gender' && id == val.genderId) {
        this.watchListData.push(val);  
      }
      if (type == 'color' && id == val.colorId) {
        this.watchListData.push(val);
      }
      if (type == 'warranty' && id == val.warrantyId) {
        this.watchListData.push(val);
      }
    })

    console.log(this.watchListData, 'watchListData');
    this.newWatchList.emit(this.watchListData);
  }


  public removeFilter() {
    
    }
}
