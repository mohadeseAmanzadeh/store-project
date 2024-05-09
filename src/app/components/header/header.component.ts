import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
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

  showInput() {
    
  }
}
