import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WatchListService } from '../../services/watch-list.service';

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
  @Input() item: any = {
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
  constructor(
    private watchListService: WatchListService,
  ) {}

  editWatch() {
    this.watchListService.editWatch(this.item)
  }

  addWatch() {
    this.watchListService.addWatch(this.item)
  }

}
