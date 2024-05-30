import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  
  transform(items: any[], filter: any): any {    
    if (!items || !filter) {
      return items;
    }
     return items.filter(item => (item.model && item.model.indexOf(filter) !== -1) ||
    (item.price && item.price.indexOf(filter) !== -1) || 
    (item.brandTitle  && item.brandTitle.indexOf(filter) !== -1));   
    
  }
}
