import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppComponent } from './app.component';
import { UtilsModule } from '@src/app/services/utils/utils.module';
import { ApiModule } from '@src/app/services/api/api.module';
import { PhoneListModule } from '@src/app/phone-list/phone-list.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    UpgradeModule,
    UtilsModule,
    ApiModule,
    PhoneListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
