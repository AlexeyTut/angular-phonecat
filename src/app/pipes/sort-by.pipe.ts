import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  transform(value: any[], field: string = '', order: 'asc' | 'desc' = 'asc'): any {
    if (!value || !order) {
      return value;
    }
    if (value.length <= 1) {
      return value;
    }
    if (!field || field === '') {
      if (order === "asc") {
        return value.sort();
      }
      return value.sort().reverse();
    }
    return orderBy(value, [field], [order]);
  }
}
