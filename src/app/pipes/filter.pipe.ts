import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], field: string, filter: string): any[] {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item[field]?.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}
