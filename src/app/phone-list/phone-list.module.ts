import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PhoneListComponent } from '@src/app/phone-list/phone-list.component';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from '@src/app/services/utils/utils.module';
import { PipesModule } from '@src/app/pipes/pipes.module';

@NgModule({
  exports: [PhoneListComponent],
  imports: [
    FormsModule,
    BrowserModule,
    UtilsModule,
    PipesModule,
  ],
  declarations: [PhoneListComponent]
})
export class PhoneListModule {}
