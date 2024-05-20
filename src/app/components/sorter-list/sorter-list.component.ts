import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
  public sorterList =  [
    {
      title: 'جدیدترین',
      active: true
    },
    {
      title: 'ارزانترین',
      active: false
    },
    {
      title: 'گرانترین',
      active: false
    },
  ]
}
