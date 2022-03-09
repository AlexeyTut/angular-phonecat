import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from '@src/app/services/utils/utils.module';
import { PipesModule } from '@src/app/pipes/pipes.module';
import { PhoneDetailComponent } from '@src/app/phone-detail/phone-detail.component';

@NgModule({
  exports: [PhoneDetailComponent],
  imports: [
    FormsModule,
    BrowserModule,
    UtilsModule,
    PipesModule,
  ],
  declarations: [PhoneDetailComponent]
})
export class PhoneDetailModule {}
