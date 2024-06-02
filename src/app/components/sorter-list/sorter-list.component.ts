import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SorterListService } from '../../services/sorter-list.service';
import { SorterListInterface } from '../../interface/data.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sorter-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sorter-list.component.html',
  styleUrl: './sorter-list.component.scss'
})
export class SorterListComponent implements OnInit , OnDestroy{
 
  // private sorterListTypeSubscription: Subscription;

  public selectedSorterIdx: string = '';

  constructor(
    public sorterListService: SorterListService
  ) {}

  ngOnInit(): void {
    // this.sorterListTypeSubscription = this.sorterListService.setSorterType().subscribe(() => {

    // })
  }

  ngOnDestroy() {
		// this.sorterListTypeSubscription.unsubscribe();
	}

  selectSorter(sorter: SorterListInterface) {
    this.sorterListService.sorterList.forEach((value:any) => {
      value.active = ( sorter.id == value.id);
    });

    this.sorterListService.sortType = sorter.type;
  }
}
