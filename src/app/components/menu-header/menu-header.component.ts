import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';


@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [
    CommonModule,
    SvgIconComponent,
    RouterModule
  ],
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.scss'
})
export class MenuHeaderComponent {
  public menu = [ 
    
    {
      title: 'مقایسه',
      link: 'comparison'
    },
    {
      title: 'علاقه مندی ها',
      link: 'interest'
    }
  ]
}
