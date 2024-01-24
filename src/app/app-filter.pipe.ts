import { Pipe, PipeTransform } from '@angular/core';
import { Qualification } from './Qualification';

@Pipe({
  name: 'appFilter',
  standalone: true,
})
export class AppFilterPipe implements PipeTransform {
  transform(items: Qualification[] | null, searchText: string): any[] {
    // Use the nullish coalescing operator to return [] if items is null
    items = items ?? [];
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter((it) => {
      return it.skill?.toLowerCase().includes(searchText);
    });
  }
}
