import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccordionDirective } from '../accordion/accordion.directive';
import { AccordionComponent } from '../accordion/accordion.component';
import { WatchListService } from '../../services/watch-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-filter',
  standalone: true,
  imports: [
    AccordionDirective,
    AccordionComponent,
    CommonModule
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
      gender: "بچگانه"
  },
  {
      id: 2,
      gender: "زنانه"
  },
  {
      id: 3,
      "gender": "مردانه"
  }
  ]
  public colorList = [
    {
      id: 1,
      color: "سبز"
  },
  {
      id: 2,
      color: "نقره‌ای"
  },
  {
      id: 3,
      color: "خاکستری"
  },
  {
      id: 4,
      color: "بنفش"
  },
  {
      id: 5,
      color: "صورتی"
  },
  {
      id: 6,
      color: "رزگلد"
  },
  {
      id: 7,
      color: "سورمه‌ای"
  },
  {
      id: 8,
      color: "مشکی"
  },
  {
      id: 9,
      color: "آبی"
  },
  {
      id: 10,
      color: "طلایی"
  },
  {
      id: 11,
      color: "سفید"
  }
  ]
  public warrantyList = [
    {
      id: 1,
      warranty: "گارانتی 24 ماهه دیجیران"
  },
  {
      id: 2,
      warranty: "گارانتی 18 ماهه زمان و زیور"
  },
  {
      id: 3,
      warranty: "گارانتی 12 ماهه پوزیترون"
  }
  ]

  constructor(
    private watchListService: WatchListService,
  ) {
  }

  ngOnInit(): void {
  }

  public filterList(id: any , type: any) {
    this.watchListData = [];
    this.watchList.forEach((val: any) => {
      if (type == 'gender' && id == val.genderId) {
        this.watchListData.push(val);
      }
      if (type == 'color' && id == val.genderId) {
        this.watchListData.push(val);
      }
      if (type == 'warranty' && id == val.genderId) {
        this.watchListData.push(val);
      }
    })
    this.newWatchList.emit(this.watchListData);
  }
}
