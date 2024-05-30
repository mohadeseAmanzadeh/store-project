import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  

  transform(items: any[], filter: any): any {
    
    if (!items || !filter) {
      console.log(items, 'items');
      console.log(filter, 'filter');
      
      
      return items;
      
    }

    
    return items.sort((a: any , b: any) => {
      let aPrice = parseInt(a.price.replace(',', '')) 
      let bPrice = parseInt(b.price.replace(',', ''))
      if( aPrice < bPrice) {
        return -1
      }
      if(aPrice > bPrice) {
        return 1
      }
      return 0    
    });
  
    
  }

}
