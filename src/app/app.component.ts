import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { RouterOutlet} from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AccordionDirective } from './components/accordion/accordion.directive';
import { WatchListService } from './services/watch-list.service';

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
    // AccordionComponent,
	
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    
  ]
})
export class AppComponent implements OnInit{
  title = 'store-project';

  constructor(
    private watchListService: WatchListService,
) {} 

  ngOnInit(): void {
   
    this.watchListService.getWatchList().then((resp: any) => {   
        // this.list = resp;
    }) 
      
  }
}
