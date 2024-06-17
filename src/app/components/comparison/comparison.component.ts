import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';

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

  ngOnInit(): void {
    this.getLocalStorageCamparison();
  }

  getLocalStorageCamparison() {
    this.camparison = localStorage.getItem('camparisonList');
    if (this.camparison) {
      this.camparison =  JSON.parse(this.camparison);    
    }
  }


  clearItem(item: any) {
    this.camparison.splice(item, 1);
    localStorage.setItem('camparisonList', JSON.stringify(this.camparison));
  }
}
