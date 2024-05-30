import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SorterListService } from '../../services/sorter-list.service';
import { SorterListInterface } from '../../interface/data.interface';

@Component({
  selector: 'app-sorter-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sorter-list.component.html',
  styleUrl: './sorter-list.component.scss'
})
export class SorterListComponent {
 
  public selectedSorterIdx: string = '';

  constructor(
    public sorterListService: SorterListService
  ) {}

  selectSorter(sorter: SorterListInterface) {
      sorter.active = !sorter.active;
  }
}
