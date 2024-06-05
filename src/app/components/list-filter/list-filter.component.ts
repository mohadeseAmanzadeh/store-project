import { Component } from '@angular/core';
import { AccordionDirective } from '../accordion/accordion.directive';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-list-filter',
  standalone: true,
  imports: [
    AccordionDirective,
    AccordionComponent
  ],
  templateUrl: './list-filter.component.html',
  styleUrl: './list-filter.component.scss'
})
export class ListFilterComponent {

}
