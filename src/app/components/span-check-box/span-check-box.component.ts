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
  styleUrl: './span-check-box.component.scss'
})
export class SpanCheckBoxComponent {

  @Input() active: boolean = false;
  @Input() cssClass: string = '';

  public isFocused: boolean = false;

  _toggleCheckButton() {
		if (this.isFocused) {
			this.active = !this.active;
		}
	}
}
