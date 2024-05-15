import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
interface list {

}
@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.scss'
})
export class WatchListComponent {

  public watchlist: list[] = []
  constructor(protected _http: HttpClient) {}

  showdata():Observable<list> {
    return  this._http
      .get('./assets/list.json',)
  }
}
