import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { MenuHeaderComponent } from '../menu-header/menu-header.component';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    SvgIconComponent, 
    MenuHeaderComponent,
    FormsModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public list = [
    {
      title: 'ورود / ثبت نام',
      icon: '',
      link: ''
    },
    {
      title: 'مقایسه',
      icon: '',
      link: ''
    },
   
  ]

  constructor(
    public searchService: SearchService
  ) {}

  showInput() {
    
  }
}
