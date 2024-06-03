import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.scss'
})
export class MenuHeaderComponent {
  public menu = [ 
    
    {
      title: 'ساعت مردانه'
    },
    {
      title: 'ساعت زنانه'
    },

    {
      title: 'برند ها'
    }
  ]
}
