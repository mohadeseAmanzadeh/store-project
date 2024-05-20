import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { RouterModule, RouterOutlet, Routes, provideRouter } from '@angular/router';
import { MainComponent } from './components/main/main.component';
// import { NgScrollbarModule } from 'ngx-scrollbar';
import { AccordionDirective } from './components/accordion/accordion.directive';
import { AccordionComponent } from './components/accordion/accordion.component';
import { SorterListComponent } from './components/sorter-list/sorter-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    CommonModule,  
    HeaderComponent,
    MainComponent, 
    SvgIconComponent,
    RouterOutlet,
    AccordionDirective,
    AccordionComponent,
    // SorterListComponent
		// NgScrollbarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    
  ]
})
export class AppComponent {
  title = 'store-project';
}
