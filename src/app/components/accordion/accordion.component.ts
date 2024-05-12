import { Component, Input } from '@angular/core';
import { AccordionDirective } from './accordion.directive';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [
    AccordionDirective,
    SvgIconComponent
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {

  @Input() title: string = '';

  public content: any;

}
