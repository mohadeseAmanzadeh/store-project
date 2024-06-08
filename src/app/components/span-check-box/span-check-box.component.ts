import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-span-check-box',
  standalone: true,
  imports: [
    SvgIconComponent,
    CommonModule
  ],
  templateUrl: './span-check-box.component.html',
  styleUrl: './span-check-box.component.scss',
  host: {
		'(document:keydown.space)': '_toggleCheckButton()'
	}
})
export class SpanCheckBoxComponent {

  @Input() active: boolean = false;
  @Input() cssClass: string = '';


  _toggleCheckButton() {
    this.active = !this.active;
	}
}
