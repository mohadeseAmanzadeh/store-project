import { Pipe, PipeTransform } from '@angular/core';
import { SorterListService } from '../services/sorter-list.service';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {
 
  constructor(
    public sorterListService: SorterListService
  ) {}

  transform(items: any[], sortType: any): any {
    if (!items || !sortType) {
      return items;
    }

    if (this.sorterListService.sortType == 'expensive') {
      return items.sort((a: any , b: any) => {
        let aPrice = parseInt(a.price) 
        let bPrice = parseInt(b.price)
        if( aPrice < bPrice) {
          return 1
        }
        if(aPrice > bPrice) {
          return -1
        }
        return 0    
      });
    
    } 
    if (this.sorterListService.sortType == 'inexpensive') {
      return items.sort((a: any , b: any) => {
        let aPrice = parseInt(a.price) 
        let bPrice = parseInt(b.price)
        if( aPrice < bPrice) {
          return -1
        }
        if(aPrice > bPrice) {
          return 1
        }
        return 0    
      });
    } 
    if (this.sorterListService.sortType == 'new') {
      return items.sort((a: any , b: any) => {
        let aDate = a.date;
        let bDate = b.date;
        if( aDate < bDate) {
          return 1
        }
        if(aDate > bDate) {
          return -1
        }
        return 0    
      });
    }   
  }

}
