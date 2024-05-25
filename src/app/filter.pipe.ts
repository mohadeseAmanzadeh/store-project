import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items
    }
    return items.filter (item => (item.model  && item.model.indexOf(filter.model) !== 1) ||
      (item.price  && item.price.indexOf(filter.price) !== 1) || 
      (item.brandTitle  && item.brandTitle.indexOf(filter.brandTitle) !== 1));
  }


}
