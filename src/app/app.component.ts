import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { RouterModule, RouterOutlet, Routes, provideRouter } from '@angular/router';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    CommonModule,  
    HeaderComponent,
    MainComponent, 
    SvgIconComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    
  ]
})
export class AppComponent {
  title = 'store-project';
}
