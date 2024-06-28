import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss'
})
export class ActionsComponent {
  @Input() watch: any = {
    id: 0,
    date: '',
    model: '',
    price: '',
    img: '',
    brandTitle: '',
    genderType: '',
    warrantyType: '',
    colorName: ''
  }
}
