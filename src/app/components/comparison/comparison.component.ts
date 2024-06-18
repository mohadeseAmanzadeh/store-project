import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-comparison',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    SvgIconComponent
  ],
  templateUrl: './comparison.component.html',
  styleUrl: './comparison.component.scss'
})
export class ComparisonComponent implements OnInit{

  public camparison: any = [];
  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getLocalStorageCamparison();
  }

  getLocalStorageCamparison() {
    this.camparison = this.dataService.getDataFromStorage('camparisonList', this.camparison)
  }


  clearItem(item: any) {
    this.camparison.splice(item, 1);
    this.dataService.setDataTostorage('camparisonList', this.camparison)
  }
}
