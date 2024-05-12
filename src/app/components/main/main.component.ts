import { Component } from '@angular/core';
import { AccordionDirective } from '../accordion/accordion.directive';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AccordionComponent, AccordionDirective],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
