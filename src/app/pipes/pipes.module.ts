import { NgModule } from '@angular/core';
import { FilterPipe } from '@src/app/pipes/filter.pipe';
import { SortByPipe } from '@src/app/pipes/sort-by.pipe';

@NgModule({
  exports: [FilterPipe, SortByPipe],
  declarations: [FilterPipe, SortByPipe]
})
export class PipesModule {
}
