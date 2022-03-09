import { NgModule } from '@angular/core';
import { FilterPipe } from '@src/app/pipes/filter.pipe';
import { SortByPipe } from '@src/app/pipes/sort-by.pipe';
import { CheckmarkPipe } from '@src/app/pipes/checkmark.pipe';

@NgModule({
  exports: [FilterPipe, SortByPipe, CheckmarkPipe],
  declarations: [FilterPipe, SortByPipe, CheckmarkPipe]
})
export class PipesModule {
}
